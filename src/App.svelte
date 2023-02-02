<script lang="ts">
    import {
        IconArrowRight,
        IconChartHistogram,
        IconTallymarks,
        IconTimelineEvent,
    } from "@tabler/icons-svelte";
    import initSqlJs, { type Database } from "sql.js";
    import sqlWasm from "sql.js/dist/sql-wasm.wasm?url";
    import CardsCDB from "../thirdparty/BabelCDB/cards.cdb?url";
    import TarotCardImg from "./assets/images/tarot-991041_1920.jpg";
    import type {
        YDBDecklist,
        YDBDecklistEntries,
        YGODecklist,
    } from "./interfaces/ygo";
    import Footer from "./lib/Footer.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import { getCentralTendencies, getWordCounts } from "./lib/utils";
    import { getYDBDecklist } from "./lib/ydb";

    let decklist_url: string =
        "https://www.db.yugioh-card.com/yugiohdb/member_deck.action?ope=1&cgid=15e16e034ce4d4822074831588f10839&dno=11";
    let decklist: YGODecklist;
    
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

    {#if wordCounts}
        {@const mct = getCentralTendencies(
            wordCounts.map((wc) => wc.wordCount)
        )}

        <section class="container mx-auto px-4">
            <h2 class="my-5 text-3xl font-bold" id="content">Word Count</h2>
            <p>
                Whether or not people can play against your rouge deck without
                live commentary on each effects.
            </p>

            <h3 class="my-5 text-2xl font-bold text-left">
                The three most wordy cards are...
            </h3>
            <div class="flex gap-3">
                {#each wordCounts.slice(0, 3) as top_card, i (top_card.name)}
                    <div class="card w-72 bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">#{i + 1}</h2>
                            <p>{top_card.name}</p>
                            <small class="text-base-content"
                                >{top_card.wordCount} words</small
                            >
                        </div>
                    </div>
                {/each}
            </div>

            <div class="divider">AND</div>

            <h3 class="my-5 text-2xl font-bold text-right">
                Your most readable cards are...
            </h3>
            <div class="flex gap-3 justify-end">
                {#each wordCounts
                    .slice(-3)
                    .reverse() as bot_card, i (bot_card.name)}
                    <div class="card w-972 bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">#{i + 1}</h2>
                            <p>{bot_card.name}</p>
                            <small>{bot_card.wordCount} words</small>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="divider" />

            <h3 class="my-5 text-2xl font-bold text-center">
                And for everything, you have...
            </h3>
            <div class="flex gap-3 justify-center">
                <div class="stats shadow-inner bg-base-200">
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <IconChartHistogram class="inline-block" />
                        </div>
                        <div class="stat-title">Mean</div>
                        <div class="stat-value">
                            {mct.mean.toFixed(0)} words
                        </div>
                        <div class="stat-desc">Average wc.</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <IconTimelineEvent class="inline-block" />
                        </div>
                        <div class="stat-title">Median</div>
                        <div class="stat-value">
                            {mct.median.toFixed(0)} words
                        </div>
                        <div class="stat-desc">Halfway wc.</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <IconTallymarks class="inline-block" />
                        </div>
                        <div class="stat-title">Mode</div>
                        <div class="stat-value">
                            {mct.mode.toFixed(0)} words
                        </div>
                        <div class="stat-desc">Most Frequent wc.</div>
                    </div>
                </div>
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
