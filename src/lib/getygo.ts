import type { Database } from "sql.js";
import type { IdDecklist, NameDecklist, NameDecklistEntries, YGODecklist } from "../interfaces/ygo";
import { getYDBDecklist } from "./ydb";
import { getYDKEDecklist } from "./ydke";

/**
 * Gets extra data for cards with names in the decklist.
 * 
 * Should only used for Neuron / YGO Card DB, since they don't use the passcode ids.
 * @param cdb card database
 * @param dl decklist of cards with PK of names
 * @returns a full decklist with data from cdb
 */
export async function getDBAdditionsByName(cdb: Database, dl: NameDecklist): Promise<YGODecklist> {
    const result = {} as YGODecklist;

    for (const [cardType, cards] of Object.entries(
        dl
    ) as NameDecklistEntries) {
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

/**
 * Gets extra data for cards with ids in the decklist.
 * 
 * Unofficial platforms give the passcode information, which is used here.
 * @param cdb card database
 * @param dl decklist of cards with PK of ids
 * @returns a full decklist with data from cdb
 */
export async function getDBAdditionsById(cdb: Database, dl: IdDecklist): Promise<YGODecklist> {
    const result = {} as YGODecklist;
    
    throw new Error("getDBAdditionsById unimplemented");
    
    return result;
}

/**
 * Takes url from users and attempts to get a full decklist for analysis.
 * 
 * @throws errors about parsing, invalid urls, etc.
 * @param db card database
 * @param dispatch_url url from the user to dispatch internally
 * @returns decklist of YGOCard to use for analysis
 */
export async function getYGODecklist(db: Database, dispatch_url: string): Promise<YGODecklist> {
    const urlObj = new URL(dispatch_url);

    if (urlObj.origin === "https://www.db.yugioh-card.com") {
        const ydbDL = await getYDBDecklist(urlObj);
        return await getDBAdditionsByName(db, ydbDL);
    } else if (urlObj.protocol === "ydke:") {
        const ydkeDL = await getYDKEDecklist(urlObj);
        return await getDBAdditionsById(db, ydkeDL);
    } else {
        throw new Error("Invalid or unsupported decklist provided");
    }
}
