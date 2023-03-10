import YGOTCGBanlistRaw from "../../thirdparty/LFLists/0TCG.lflist.conf?raw";
// import YGOTCGBanlistRaw from "../../thirdparty/LFLists/0TCG.new.lflist.conf?raw";
import type { CentralTendencies } from "../interfaces/common";
import type { BanlistPair as BanlistEntry, YGOBanlist, YGOCardWithLimit, YGODecklist, YGOCardWithWordcount } from "../interfaces/ygo";

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

export function getWordCounts(dl: YGODecklist): YGOCardWithWordcount[] {
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

    const histogramArr = getFrequencies(arr);

    const mean = sum / arr.length;
    const median = arr[Math.floor(arr.length / 2)]; // needs to be an arr element
    const mode = histogramArr.sort((v1, v2) => v2.cnt - v1.cnt)[0]?.val;

    // console.log({ arr, sum, histogram, mean, median, mode });

    return {
        mean: Math.round(mean), // safe display
        median,
        mode,
    };
}

/**
 * Obtains frequency of numbers within an array
 * @param arr array of numbers to process
 * @returns an object with each number and its frequency
 */
export function getFrequencies(arr: number[]) {
    const histogram = arr.reduce((prev, cur) => {
        if (!prev[cur])
            prev[cur] = 1;
        else
            prev[cur]++;
        return prev;
    }, {} as Record<number, number>);
    const histogramArr = Object.entries(histogram).map(([val, cnt]) => ({
        val: parseInt(val),
        cnt,
    }));
    return histogramArr;
}

export function getMCT(wordCounts: YGOCardWithWordcount[]) {
    return getCentralTendencies(
        wordCounts.map((wc) => wc.wordCount)
    );
}

export function getCORSProxy() {
    return import.meta.env.DEV
        ? "https://cors-anywhere.herokuapp.com/"
        : "https://mohnishkalia-cors-proxy.onrender.com/";
}

/**
 * Uses LFLists to create lookup object
 * @returns lookup of card id to max limit
 */
export function getYGOBanlist(): YGOBanlist {
    const rawTCG = YGOTCGBanlistRaw;

    // split up lines, remove whitespace, don't consider comments or empty lines
    const banlistLines = rawTCG
        .split(/\r?\n/g)
        .map(l => l.trim())
        .filter(l => l && !l.startsWith('#') && !l.startsWith('!'));

    // take first 2 numbers from each line [card id, max limit]
    const banlistData = banlistLines
        .map(l => l.match(/^(\d+) (\d)/))
        .map(ms => ms.splice(1, 2).map(n => parseInt(n)) as BanlistEntry);

    // construct object lookup out of entries
    const result = Object.fromEntries(banlistData);

    return result;
}

export function getLimits(dl: YGODecklist, bl: YGOBanlist): YGOCardWithLimit[] {
    const allCards = Object.values(dl).flatMap((cardType) => cardType);
    // console.log({
    //     dl,
    //     bl,
    //     allCards,
    //     numAllCards: allCards.reduce((sum, cur) => sum + cur.num, 0),
    // });

    return allCards
        .map((c) => ({
            id: c.id,
            name: c.name,
            desc: c.desc,
            limit: bl[c.id] ?? 3,
        }));
}
