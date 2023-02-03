import type { YDBDecklist } from "../interfaces/ygo";

export async function getYDBDecklist(url: string): Promise<YDBDecklist> {
    const urlObj = new URL(url);
    if (urlObj.origin !== "https://www.db.yugioh-card.com")
        throw new Error("invalid url");

    const ca = import.meta.env.DEV
        ? "https://cors-anywhere.herokuapp.com/"
        : "https://mohnishkalia-cors-proxy.onrender.com/";
    const deckPromise = fetch(ca + urlObj).then((res) => res.text());
    const deckDoc = await deckPromise;

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
}