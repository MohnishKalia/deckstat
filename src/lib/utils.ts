import type { CentralTendencies } from "../interfaces/common";
import type { YGODecklist } from "../interfaces/ygo";

export function wordCount(s: string): number {
    const normS = s
        .replaceAll("[ Pendulum Effect ]\r\n", "")
        .replaceAll("----------------------------------------\r\n", "")
        .replaceAll("[ Monster Effect ]\r\n", "")
        .trim();
    const words = normS.split(/\s+/m).filter(s => s.trim());
    // console.log({ s, normS, words });
    return words.length;
}

export function getWordCounts(dl: YGODecklist) {
    const allCards = Object.values(dl).flatMap((cardType) => cardType);
    // console.log({
    //     dl,
    //     allCards,
    //     numAllCards: allCards.reduce((sum, cur) => sum + cur.num, 0),
    // });

    return allCards
        .map((c) => ({
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
        mean,
        median,
        mode,
    };
}