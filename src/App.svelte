<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import Footer from "./lib/Footer.svelte";
    import { IconArrowRight } from "@tabler/icons-svelte";
    import initSqlJs from "sql.js";
    import sqlWasm from "sql.js/dist/sql-wasm.wasm?url";
    import TarotCardImg from "./assets/images/tarot-991041_1920.jpg";
    import CardsCDB from "../thirdparty/BabelCDB/cards.cdb?url";

    interface YGOCard {
        name: string;
        num: number;
    }

    interface Decklist {
        monsters: YGOCard[];
        spells: YGOCard[];
        traps: YGOCard[];
        extras: YGOCard[];
        sides: YGOCard[];
    }

    let decklist_url: string =
        "https://www.db.yugioh-card.com/yugiohdb/member_deck.action?ope=1&cgid=15e16e034ce4d4822074831588f10839&dno=11";
    let decklist: Decklist;
    const parser = new DOMParser();

    async function getDeckList(url: string): Promise<Decklist> {
        const urlObj = new URL(url);
        if (urlObj.origin !== "https://www.db.yugioh-card.com")
            throw new Error("invalid url");

        const ca = import.meta.env.DEV
            ? "https://cors-anywhere.herokuapp.com/"
            : "https://mohnishkalia-cors-proxy.onrender.com/";
        const deckPromise = fetch(ca + urlObj).then((res) => res.text());
        const deckDoc = await deckPromise;

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

    async function getDatabase() {
        const dataPromise = fetch(CardsCDB).then((res) => res.arrayBuffer());
        const buf = await dataPromise;
        return buf;
    }

    async function getSQLJS() {
        const sqlPromise = initSqlJs({
            locateFile: () => sqlWasm,
        });
        return await sqlPromise;
    }

    let dbResult: string;

    async function getSetDB() {
        const dbData = await getDatabase().then((buf) => new Uint8Array(buf));
        const SQL = await getSQLJS();
        const db = new SQL.Database(new Uint8Array(dbData));
        const [cardData] = db.exec(`
            select texts.id, name, desc, category
            from texts 
            inner join datas
                on texts.id = datas.id
            limit 100;
        `);
        console.log({ cardData });
        dbResult = JSON.stringify(cardData, null, 2);
    }

    getSetDB();
</script>

<main>
    <Navbar />

    <div
        class="hero min-h-[50vh]"
        style={`background-image: url(${TarotCardImg});`}
    >
        <div class="hero-overlay bg-opacity-60" />
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Statistics For You</h1>
                <p class="mb-5">
                    Deckstat provides the ability to get in-depth insights into
                    your Yu-Gi-Oh decks, whether on official or unoffical
                    platforms. Try the service today!
                </p>
                <div class="form-control w-full">
                    <label for="decklist" class="label">
                        <a href="#top" class="label-text-alt">Need Help?</a>
                    </label>
                    <div class="flex">
                        <input
                            type="text"
                            id="decklist"
                            bind:value={decklist_url}
                            placeholder="Provide a link to a decklist"
                            class="input input-bordered w-full"
                        />
                        <a
                            href="#content"
                            role="button"
                            class="btn btn-square"
                            on:click={(_) =>
                                getDeckList(decklist_url).then(
                                    (dl) => (decklist = dl)
                                )}
                        >
                            <IconArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="container mx-auto">
        <h2 class="my-5 text-3xl font-bold" id="content">Your Analysis</h2>
        <p>Below are the things we found out about your deck...</p>

        {#if decklist}
            <pre>{JSON.stringify(decklist, null, 2)}</pre>
        {/if}

        {#if dbResult}
            <pre>{dbResult}</pre>
        {/if}
    </section>

    <Footer />
</main>

<style lang="postcss">
</style>
