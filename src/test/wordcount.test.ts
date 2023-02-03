import { wordCount } from "../lib/utils";
import { testingDescs } from "./testdata";

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

    it.each(testingDescs.wordy)
        ('wordy samples: for $name => wordCount($desc) -> $wordCount', ({ desc, wordCount: expectedWC }) => {
            expect(wordCount(desc)).toBe(expectedWC);
        });

    it.each(testingDescs.special)
        ('special samples: for $name => wordCount($desc) -> $wordCount', ({ desc, wordCount: expectedWC }) => {
            expect(wordCount(desc)).toBe(expectedWC);
        });

    it.each(testingDescs.pendulum)
        ('pendulum samples: for $name => wordCount($desc) -> $wordCount', ({ desc, wordCount: expectedWC }) => {
            expect(wordCount(desc)).toBe(expectedWC);
        });
});
