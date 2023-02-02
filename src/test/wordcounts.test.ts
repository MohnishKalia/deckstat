import type { YGODecklist } from "../interfaces/ygo";
import { getWordCounts } from "../lib/utils";

describe('word counts decklist tests', () => {
    it('should handle empty decklists', () => {
        const emptyDL = {} as YGODecklist;
        expect(getWordCounts(emptyDL)).toEqual([]);
    });

    it('should get accurate decklists', () => {
    });
});
