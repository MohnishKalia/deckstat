import type { NameDecklist } from "../interfaces/ygo";
import { getCORSProxy } from "./utils";

/**
 * Fetches and parses a public decklist page on db.yugioh-card.com
 * @throws invalid url, fetch issue, parse issue
 * @param url a db.yugioh-card.com url
 * @returns a decklist object with names as PK
 */
export async function getYDBDecklist(url: URL): Promise<NameDecklist> {
    if (url.origin !== "https://www.db.yugioh-card.com")
        throw new Error("Invalid db.yugioh-card.com url");

    let deckDoc: string;

    try {
        const ca = getCORSProxy();
        const deckPromise = await fetch(ca + url);
        if (!deckPromise.ok)
            throw new Error('Decklist request failed');
        deckDoc = await deckPromise.text();
    } catch (error) {
        throw new Error('Not able to fetch decklist');
    }

    try {
        const parser = new DOMParser();
        const ws = parser.parseFromString(deckDoc, "text/html");

        const eltParse = (tr: Element) => ({
            name: tr.querySelector("td.card_name span").textContent,
            num: parseInt(tr.querySelector("td.num span").textContent),
        });

        const monElts = ws.body
            .querySelector("#monster_list")
            .querySelectorAll("tr.row");
        const monObjs = [...monElts].map(eltParse);

        const spellElts = ws.body
            .querySelector("#spell_list")
            .querySelectorAll("tr.row");
        const spellObjs = [...spellElts].map(eltParse);

        const trapElts = ws.body
            .querySelector("#trap_list")
            .querySelectorAll("tr.row");
        const trapObjs = [...trapElts].map(eltParse);

        const extraElts = ws.body
            .querySelector("#extra_list")
            .querySelectorAll("tr.row");
        const extraObjs = [...extraElts].map(eltParse);

        const sideElts = ws.body
            .querySelector("#side_list")
            .querySelectorAll("tr.row");
        const sideObjs = [...sideElts].map(eltParse);

        return {
            monsters: monObjs,
            spells: spellObjs,
            traps: trapObjs,
            extras: extraObjs,
            sides: sideObjs,
        };
    } catch (error) {
        throw new Error('Unable to parse the decklist page');
    }
}
