import type { YGODecklist } from "../interfaces/ygo";
import { getWordCounts } from "../lib/utils";
import { testingDecks } from "./testdata";

describe('word counts decklist tests', () => {
    it('should handle empty decklists', () => {
        const emptyDL = {} as YGODecklist;
        expect(getWordCounts(emptyDL)).toEqual([]);
    });

    it('should work on existing decklists', () => {
        const { dddData, srData, pkfireData } = testingDecks;
        expect(getWordCounts(dddData.decklist)).toEqual(dddData.wordCounts);
        expect(getWordCounts(srData.decklist)).toEqual(srData.wordCounts);
        expect(getWordCounts(pkfireData.decklist)).toEqual(pkfireData.wordCounts);
    });
});
