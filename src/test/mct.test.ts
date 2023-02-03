import { getCentralTendencies, getMCT } from "../lib/utils";
import { testingDecks } from "./testdata";

describe('central tendency functional tests', () => {
    it('should work with empty arrays', () => {
        expect(getCentralTendencies([])).toEqual({ mean: 0, median: 0, mode: 0 });
    });

    it('should produce correct measures', () => {
        expect(getCentralTendencies([42])).toEqual({ mean: 42, median: 42, mode: 42 });
        expect(getCentralTendencies([5, 2, 7, 3, 9])).toEqual({ mean: 5, median: 5, mode: 2 });
        expect(getCentralTendencies([4, 80, 1, 60])).toEqual({ mean: 36, median: 60, mode: 1 });
    });

    it('should work on existing decklists', () => {
        const { dddData, srData, pkfireData } = testingDecks;
        expect(getMCT(dddData.wordCounts)).toEqual(dddData.mct);
        expect(getMCT(srData.wordCounts)).toEqual(srData.mct);
        expect(getMCT(pkfireData.wordCounts)).toEqual(pkfireData.mct);
    });
});
