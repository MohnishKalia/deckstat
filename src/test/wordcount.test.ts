import { wordCount } from "../lib/utils";

describe('word count functional tests', () => {
    it('should be 0', () => {
        expect(wordCount('')).toBe(0);
        expect(wordCount('       ')).toBe(0);
        expect(wordCount('\r\n\t \n')).toBe(0);
    });

    it('should be 1', () => {
        expect(wordCount('once')).toBe(1);
        expect(wordCount('  once     ')).toBe(1);
        expect(wordCount('\r\nonce\t \n')).toBe(1);
    });
});
