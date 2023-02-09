import type { Database } from "sql.js";
import type { CentralTendencies } from "../interfaces/common";
import type { YDBDecklist, YDBDecklistEntries, YGODecklist, YGOWordcount } from "../interfaces/ygo";

export function wordCount(s: string): number {
    const normS = s
        .replaceAll("[ Pendulum Effect ]", "")
        .replaceAll("----------------------------------------", "")
        .replaceAll("[ Monster Effect ]", "")
        .trim();
    // TODO: changed to split on / for Monster/Spell/Trap, but raises issue for D/D/D
    const words = normS.split(/[\s+|/]/m).filter(s => s.trim());
    // console.log({ s, normS, words });
    return words.length;
}

export function getWordCounts(dl: YGODecklist): YGOWordcount[] {
    const allCards = Object.values(dl).flatMap((cardType) => cardType);
    // console.log({
    //     dl,
    //     allCards,
    //     numAllCards: allCards.reduce((sum, cur) => sum + cur.num, 0),
    // });

    return allCards
        .map((c) => ({
            id: c.id,
            name: c.name,
            desc: c.desc,
            wordCount: wordCount(c.desc),
        }))
        .sort((c1, c2) => c2.wordCount - c1.wordCount);
}

export function getCentralTendencies(arr: number[]): CentralTendencies {
    if (!arr?.length) return {
        mean: 0,
        median: 0,
        mode: 0,
    };

    arr.sort((a, b) => a - b);

    const sum = arr.reduce((sum, cur) => sum + cur, 0);

    const histogram = arr.reduce((prev, cur) => {
        if (!prev[cur]) prev[cur] = 1;
        else prev[cur]++;
        return prev;
    }, {} as Record<number, number>);
    const histogramArr = Object.entries(histogram).map(([val, cnt]) => ({
        val,
        cnt,
    }));

    const mean = sum / arr.length;
    const median = arr[Math.floor(arr.length / 2)]; // needs to be an arr element
    const mode = parseFloat(
        histogramArr.sort((v1, v2) => v2.cnt - v1.cnt)[0]?.val
    );

    // console.log({ arr, sum, histogram, mean, median, mode });

    return {
        mean: Math.round(mean), // safe display
        median,
        mode,
    };
}

export function getMCT(wordCounts: YGOWordcount[]) {
    return getCentralTendencies(
        wordCounts.map((wc) => wc.wordCount)
    );
}

export async function getDBAdditions(cdb: Database, dl: YDBDecklist): Promise<YGODecklist> {
    const result = {} as YGODecklist;

    for (const [cardType, cards] of Object.entries(
        dl
    ) as YDBDecklistEntries) {
        cdb.run("DROP TABLE IF EXISTS current_cards;");
        cdb.run("CREATE TEMP TABLE current_cards (name TEXT, num INTEGER);");

        cdb.run("BEGIN TRANSACTION;");
        for (const card of cards) {
            cdb.run("INSERT INTO current_cards VALUES (?, ?);", [
                card.name,
                card.num,
            ]);
        }
        cdb.run("COMMIT;");

        const stmt = cdb.prepare(`
            with arn as ( 
                select t.id, t.name, cc.num, t.desc,
                ROW_NUMBER() OVER (PARTITION BY t.name ORDER BY length(t.desc) ASC) AS rn
                from texts t
                inner join datas d
                    on t.id = d.id
                inner join current_cards cc
                    on t.name = cc.name
            )
            select id, name, num, desc
            from arn 
            where rn = 1
        `);

        const rows = [];
        while (stmt.step()) {
            const row = stmt.getAsObject();
            rows.push(row);
        }
        stmt.free();

        result[cardType] = rows;
    }

    return result;
}
