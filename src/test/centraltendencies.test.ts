import { getCentralTendencies } from "../lib/utils";

describe('central tendency functional tests', () => {
    it('should work with empty arrays', () => {
        expect(getCentralTendencies([])).toEqual({ mean: 0, median: 0, mode: 0 });
    });

    it('should produce correct measures', () => {
    });
});
