import type { IdDecklist } from "../interfaces/ygo";
import { getFrequencies } from "./utils";

/**
 * Parses a decklist url with ydke:// protocol
 * @throws invalid url, parse issue
 * @param url a ydke:// url
 * @returns a decklist object with ids as PK
 */
export async function getYDKEDecklist(url: URL): Promise<IdDecklist> {
    if (url.protocol !== "ydke:")
        throw new Error("Invalid ydke:// decklist");

    try {
        const decklistParts = url.pathname
            .replace(/^\/\//i, '')
            .split('!')
            .filter(s => s.trim());

        if (decklistParts.length !== 3)
            throw new Error('Not just 3 components in the url');

        const [mains, extras, sides] = decklistParts.map(b64 => {
            const dec = window.atob(b64);
            const enc = [...dec].map(s => s.charCodeAt(0))
            const encU8 = new Uint8Array(enc);
            const intArr = new Uint32Array(encU8.buffer);
            return intArr;
        });

        // console.log({ mains, extras, sides });

        type FreqObj = { val: number, cnt: number };
        const freqObjToIdCardData = ({ val, cnt }: FreqObj) => ({ id: val, num: cnt });

        return {
            mains: getFrequencies([...mains]).map(freqObjToIdCardData),
            extras: getFrequencies([...extras]).map(freqObjToIdCardData),
            sides: getFrequencies([...sides]).map(freqObjToIdCardData),
        };
    } catch (err) {
        throw new Error('Unable to parse the ydke:// url');
    }
}
