import type { IdDecklist } from "../interfaces/ygo";

export async function getYDKEDecklist(url: URL): Promise<IdDecklist> {
    if (url.protocol !== "ydke://")
        throw new Error("Invalid ydke:// decklist");

    // return {
    //     monsters: monObjs,
    //     spells: spellObjs,
    //     traps: trapObjs,
    //     extras: extraObjs,
    //     sides: sideObjs,
    // };
    throw new Error("ydke unimplemented");
    return null;
}
