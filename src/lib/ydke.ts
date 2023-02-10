import type { IdDecklist } from "../interfaces/ygo";

export async function getYDKEDecklist(url: URL): Promise<IdDecklist> {
    if (url.protocol !== "ydke:")
        throw new Error("Invalid ydke:// decklist");

    const decklistParts = url.pathname
        .replace(/^\/\//i, '')
        .split('!')
        .filter(s => s.trim());

    if (decklistParts.length !== 3)
        throw new Error('Not just 3 components in the url');

    const [main, extra, side] = decklistParts.map(b64 => {
        const dec = window.atob(b64);
        const enc = [...dec].map(s => s.charCodeAt(0))
        const encU8 = new Uint8Array(enc);
        const intArr = new Uint32Array(encU8.buffer);
        return intArr;
    });

    console.log({ main, extra, side });


    // return {
    //     monsters: monObjs,
    //     spells: spellObjs,
    //     traps: trapObjs,
    //     extras: extraObjs,
    //     sides: sideObjs,
    // };
    throw new Error("ydke unimplemented");
}
