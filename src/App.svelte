<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import Footer from "./lib/Footer.svelte";
    import {
        IconArrowRight,
        // IconDatabaseOff,
        // IconDatabaseExport,
    } from "@tabler/icons-svelte";
    import initSqlJs, { type Database } from "sql.js";
    import sqlWasm from "sql.js/dist/sql-wasm.wasm?url";
    import TarotCardImg from "./assets/images/tarot-991041_1920.jpg";
    import CardsCDB from "../thirdparty/BabelCDB/cards.cdb?url";

    interface YDBCardData {
        name: string;
        num: number;
    }

    interface YDBDecklist {
        monsters: YDBCardData[];
        spells: YDBCardData[];
        traps: YDBCardData[];
        extras: YDBCardData[];
        sides: YDBCardData[];
    }
    type YDBDecklistEntries = [keyof YDBDecklist, YDBCardData[]][];

    interface YGOCard extends YDBCardData {
        id: number;
        desc: string;
    }

    type YGODecklist = Record<keyof YDBDecklist, YGOCard[]>;

    let decklist_url: string =
        "https://www.db.yugioh-card.com/yugiohdb/member_deck.action?ope=1&cgid=15e16e034ce4d4822074831588f10839&dno=11";
    let decklist: YGODecklist;
    const parser = new DOMParser();

    async function getYDBDecklist(url: string): Promise<YDBDecklist> {
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
        return dataPromise;
    }

    async function getSQLJS() {
        const sqlPromise = initSqlJs({
            locateFile: () => sqlWasm,
        });
        return sqlPromise;
    }

    let dbResult: string;
    let db: Database;

    async function getSetDB(): Promise<Database> {
        const dbBytes = getDatabase().then((buf) => new Uint8Array(buf));
        const [dbData, SQL] = await Promise.all([dbBytes, getSQLJS()]);
        return new SQL.Database(new Uint8Array(dbData));
    }

    async function getDBAdditions(dl: YDBDecklist): Promise<YGODecklist> {
        const result = {} as YGODecklist;

        for (const [cardType, cards] of Object.entries(
            dl
        ) as YDBDecklistEntries) {
            db.run("DROP TABLE IF EXISTS current_cards;");
            db.run("CREATE TEMP TABLE current_cards (name TEXT, num INTEGER);");
            for (const card of cards) {
                db.run("INSERT INTO current_cards VALUES (?, ?);", [
                    card.name,
                    card.num,
                ]);
            }

            const stmt = db.prepare(`
                with arn as ( 
                    select t.id, t.name, cc.num, t.desc,
                    ROW_NUMBER() OVER (PARTITION BY t.name ORDER BY length(t.desc) ASC) AS rn
                    from texts t
                    inner join datas d
                        on t.id = d.id
                    inner join current_cards cc
                        on t.name = cc.name
                )
                select id, name, num, desc
                from arn 
                where rn = 1
            `);

            const rows = [];
            while (stmt.step()) {
                const row = stmt.getAsObject();
                rows.push(row);
            }
            stmt.free();

            result[cardType] = rows;
        }

        dbResult = JSON.stringify(result, null, 2);
        return result;
    }

    function wordCount(s: string): number {
        const normS = s
            .replaceAll("[ Pendulum Effect ]\r\n", "")
            .replaceAll("----------------------------------------\r\n", "")
            .replaceAll("[ Monster Effect ]\r\n", "")
            .trim();
        const words = normS.split(/\s+/m);
        // console.log({ s, normS, words });
        return words.length;
    }

    function getWordCounts(dl: YGODecklist) {
        const allCards = Object.values(dl).flatMap((cardType) => cardType);
        // console.log({
        //     dl,
        //     allCards,
        //     numAllCards: allCards.reduce((sum, cur) => sum + cur.num, 0),
        // });

        return allCards
            .map((c) => ({
                name: c.name,
                desc: c.desc,
                wordCount: wordCount(c.desc),
            }))
            .sort((c1, c2) => c2.wordCount - c1.wordCount);
    }

    getSetDB().then((ndb) => (db = ndb));

    $: dbNotLoaded = db ? "" : "btn-disabled";
    $: wordCounts = decklist && getWordCounts(decklist);
</script>

<main>
    <Navbar />

    <div
        class="hero min-h-[50vh]"
        style="background-image: url({TarotCardImg});"
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
                            class="btn btn-square {dbNotLoaded}"
                            on:click={(_) =>
                                getYDBDecklist(decklist_url)
                                    .then(getDBAdditions)
                                    .then((dl) => (decklist = dl))}
                        >
                            <IconArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <section>
        <h2 class="my-5 text-3xl font-bold" id="progress">Progress</h2>
        <label class="swap swap-rotate">
            <input type="checkbox" checked={!!db} disabled />

            <IconDatabaseExport class="swap-on w-10 h-10"/>
            
            <IconDatabaseOff class="swap-off w-10 h-10 col"/>
        </label>
    </section> -->

    <section class="container mx-auto px-4 min-h-[50vh] text-center">
        {#if decklist}
            <h2 class="my-5 text-4xl font-bold" id="content">Your Analysis</h2>
            <p>Below are the things we found out about your deck...</p>
        {:else}
            <h2 class="my-5 text-4xl font-bold" id="content">
                Provide a decklist above
            </h2>
            <p>Astral insight awaits.</p>
        {/if}
    </section>

    {#if decklist}
        <section class="container mx-auto px-4">
            <h2 class="my-5 text-3xl font-bold" id="content">Word Count</h2>
            <p>
                Whether or not people can play against your rouge deck without
                live commentary of your effects.
            </p>
            <h3 class="my-5 text-2xl font-bold">
                The three most wordy cards are...
            </h3>
            <div class="flex gap-3">
                {#each wordCounts.slice(0, 3) as top_card, i (top_card.name)}
                    <div class="card w-72 bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">#{i + 1}</h2>
                            <p>{top_card.name}</p>
                            <small class="text-base-content"
                                >{top_card.wordCount}</small
                            >
                        </div>
                    </div>
                {/each}
            </div>

            <div class="divider">AND</div>

            <h3 class="my-5 text-2xl font-bold">
                Your most readable cards are...
            </h3>
            <div class="flex gap-3">
                {#each wordCounts
                    .slice(-3)
                    .reverse() as bot_card, i (bot_card.name)}
                    <div class="card w-972 bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">#{i + 1}</h2>
                            <p>{bot_card.name}</p>
                            <small>{bot_card.wordCount}</small>
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    {/if}

    {#if decklist}
        <section class="container mx-auto px-4 overflow-clip">
            <div class="divider mt-4">raw results</div>

            <details class="bg-base-200 my-2">
                <summary>Word Count</summary>
                <pre>{JSON.stringify(wordCounts, null, 2)}</pre>
            </details>

            <details class="bg-base-200 my-2">
                <summary>Raw Decklist</summary>
                <pre>{JSON.stringify(decklist, null, 2)}</pre>
            </details>
        </section>
    {/if}

    <Footer />
</main>

<style lang="postcss">
</style>
