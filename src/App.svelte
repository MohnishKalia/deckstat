<script lang="ts">
    import {
        IconAddressBook,
        IconAlertOctagon,
        IconArrowRight,
        IconChartHistogram,
        IconDatabaseExport,
        IconFileImport,
        IconLink,
        IconTallymarks,
        IconTimelineEvent,
    } from "@tabler/icons-svelte";
    import initSqlJs, { type Database } from "sql.js";
    import sqlWasm from "sql.js/dist/sql-wasm.wasm?url";
    import CardsCDB from "../thirdparty/BabelCDB/cards.cdb?url";
    import TarotCardImg from "./assets/images/tarot-991041_1920.jpg";
    import type { YGODecklist } from "./interfaces/ygo";
    import DocsYdb from "./lib/docs/DocsYdb.svelte";
    import DocsYdke from "./lib/docs/DocsYdke.svelte";
    import Footer from "./lib/Footer.svelte";
    import { getYGODecklist } from "./lib/getygo";
    import Navbar from "./lib/Navbar.svelte";
    import ProviderDisplay from "./lib/ProviderDisplay.svelte";
    import { getMCT, getWordCounts } from "./lib/utils";

    let decklist_url: string =
        "ydke://o6lXBUpwSQMS2aAC!viOnArXwAQU=!rvTMAh0EiwLUmP0B!";
    let decklist: YGODecklist;

    let db: Database;

    let errText: string;

    let tabs = [
        { name: "Neuron", disabled: false },
        { name: ".ydk", disabled: true },
        { name: "ydke://", disabled: false },
        { name: "DBook", disabled: true },
    ];
    let activeTab = 0;

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

    async function getSetDB(): Promise<Database> {
        const dbBytes = getDatabase().then((buf) => new Uint8Array(buf));
        const [dbData, SQL] = await Promise.all([dbBytes, getSQLJS()]);
        return new SQL.Database(new Uint8Array(dbData));
    }

    getSetDB()
        .then((ndb) => (db = ndb))
        .catch((_) => (errText = "Internal DB not loaded."));

    $: dbNotLoaded = db ? "" : "btn-disabled cursor-not-allowed";
    // TODO: Maybe turn this into const inline for the word count section,
    // or expand to include all statistics including wordcount
    $: wordCounts = decklist && getWordCounts(decklist);
</script>

<main>
    <Navbar />

    <div
        class="hero sm:min-h-[50vh]"
        style="background-image: url({TarotCardImg});"
    >
        <div class="hero-overlay bg-opacity-70" />
        <div
            class="hero-content p-0 py-4 mx-auto text-center text-neutral-content"
        >
            <div class="max-w-lg">
                <h1 class="mb-5 text-6xl font-bold text-primary-content">
                    Deckbuilding Statistics for You
                </h1>
                <p class="mb-5 text-xl">
                    Deckstat provides <b class="text-primary-content opacity-80"
                        >in-depth insights</b
                    >
                    into your Yu-Gi-Oh decks, on
                    <b class="text-primary-content opacity-80"
                        >official or unoffical</b
                    >
                    platforms.
                </p>
            </div>
        </div>
    </div>

    <section class="min-h-[50vh] bg-base-300 flex items-center">
        <!-- lg:grid-flow-col grid-flow-row -->
        <!-- 1fr 0.05fr 1fr -->
        <div
            class="container mx-auto px-4 py-12 grid lg:grid-cols-[1fr_0.05fr_1fr] grid-cols-1 lg:grid-rows-1"
        >
            <div class="side">
                <h2 class="lg:pt-12 mb-5 text-4xl font-bold" id="begin">
                    Start Here
                </h2>
                <div class="form-control w-full">
                    <label for="decklist" class="label">
                        <label
                            for="help-modal"
                            class="link link-hover label-text-alt"
                            >Need Help?</label
                        >
                    </label>
                    <div class="flex">
                        <input
                            type="text"
                            id="decklist"
                            bind:value={decklist_url}
                            placeholder="Provide a link to a decklist"
                            class="input input-bordered input-md w-full"
                        />
                        <a
                            href="#content"
                            role="button"
                            aria-label="Load decklist button"
                            class="btn btn-square {dbNotLoaded}"
                            on:click={(_) =>
                                getYGODecklist(db, decklist_url)
                                    .then((dl) => (decklist = dl))
                                    .catch(
                                        (err) =>
                                            (errText =
                                                err?.message ??
                                                "The decklist provided was not valid.")
                                    )}
                        >
                            <IconArrowRight />
                        </a>
                    </div>
                </div>
            </div>
            <div class="divider lg:divider-horizontal" />
            <div class="side flex flex-col gap-2">
                <ProviderDisplay
                    provider="Neuron / YGO Card DB"
                    example="https://www.db.yugioh-card.com/yugiohdb/member_deck.action?ope=1&cgid=15e16e034ce4d4822074831588f10839&dno=11"
                    disabled={false}
                >
                    <IconDatabaseExport
                        slot="icon"
                        class="stroke-warning flex-shrink-0 w-6 h-6"
                    />
                </ProviderDisplay>
                <ProviderDisplay
                    provider=".ydk"
                    example="My_Cool_Deck.ydk"
                    disabled
                >
                    <IconFileImport
                        slot="icon"
                        class="stroke-success flex-shrink-0 w-6 h-6"
                    />
                </ProviderDisplay>
                <ProviderDisplay
                    provider="ydke://"
                    example="ydke://o6lXBUpwSQMS2aAC!viOnArXwAQU=!rvTMAh0EiwLUmP0B!"
                    disabled={false}
                >
                    <IconLink
                        slot="icon"
                        class="stroke-error flex-shrink-0 w-6 h-6"
                    />
                </ProviderDisplay>
                <ProviderDisplay
                    provider="Dueling Book"
                    example="https://www.duelingbook.com/deck?id=227361"
                    disabled
                >
                    <IconAddressBook
                        slot="icon"
                        class="stroke-info flex-shrink-0 w-6 h-6"
                    />
                </ProviderDisplay>
            </div>
        </div>
    </section>

    <section class="container mx-auto px-4 min-h-[50vh] text-center">
        {#if decklist}
            <h2 class="my-5 text-4xl font-bold" id="content">Your Analysis</h2>
            <p>Below are the things we found out about your deck...</p>
        {:else}
            <h2 class="my-5 text-4xl font-bold" id="content">
                Provide a decklist above
            </h2>
            <p>Astral insight awaits.</p>

            <label for="help-modal"
                ><button class="btn text-3xl mt-20 normal-case"
                    >Having difficulties?</button
                ></label
            >
        {/if}
    </section>

    <!-- Help Modal -->
    <input type="checkbox" id="help-modal" class="modal-toggle" />
    <!-- <div class="modal modal-bottom sm:modal-middle"> -->
    <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl relative">
            <label
                for="help-modal"
                class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
            >
            <h3 class="font-bold text-2xl">Where to source decklists</h3>
            <!-- https://github.com/saadeghi/daisyui/discussions/577#discussioncomment-2342266 -->
            <div class="tabs mb-4">
                {#each tabs as tab, index}
                    {@const tabDisabled = tab.disabled
                        ? "text-neutral-focus cursor-not-allowed disabled"
                        : ""}
                    {@const tabActive = activeTab === index ? "tab-active" : ""}
                    <a
                        href="#help-tab-{index}"
                        class="tab tab-md tab-bordered {tabDisabled} {tabActive}"
                        on:click={() => (activeTab = index)}>{tab.name}</a
                    >
                {/each}
            </div>
            <div
                id="help-tab-0"
                class="h-[60vh] overflow-y-scroll"
                class:hidden={activeTab !== 0}
            >
                <DocsYdb />
            </div>
            <div
                id="help-tab-1"
                class="h-[60vh] overflow-y-scroll"
                class:hidden={activeTab !== 1}
            >
                <p>Not implemented</p>
            </div>
            <div
                id="help-tab-2"
                class="h-[60vh] overflow-y-scroll"
                class:hidden={activeTab !== 2}
            >
                <DocsYdke />
            </div>
            <div
                id="help-tab-3"
                class="h-[60vh] overflow-y-scroll"
                class:hidden={activeTab !== 3}
            >
                <p>Not implemented</p>
            </div>
        </div>
    </div>

    {#if wordCounts}
        {@const mct = getMCT(wordCounts)}
        <!-- {@debug decklist, wordCounts, mct} -->

        <section class="container mx-auto px-4">
            <h2 class="my-5 text-3xl font-bold" id="content">Word Count</h2>
            <p>
                Whether or not people can play against your rouge deck without
                live commentary on each effect.
            </p>

            <h3 class="my-5 text-2xl font-bold text-left">
                The three most wordy cards are...
            </h3>
            <div class="flex flex-col sm:flex-row gap-3">
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
            <div
                class="flex flex-col-reverse sm:flex-row-reverse gap-3 items-end sm:items-stretch"
            >
                {#each wordCounts
                    .slice(-3)
                    .reverse() as bot_card, i (bot_card.name)}
                    <div class="card w-72 bg-neutral text-neutral-content">
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
                            {mct.mean} words
                        </div>
                        <div class="stat-desc">Average wc.</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <IconTimelineEvent class="inline-block" />
                        </div>
                        <div class="stat-title">Median</div>
                        <div class="stat-value">
                            {mct.median} words
                        </div>
                        <div class="stat-desc">Halfway wc.</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <IconTallymarks class="inline-block" />
                        </div>
                        <div class="stat-title">Mode</div>
                        <div class="stat-value">
                            {mct.mode} words
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

    <!-- error display -->
    {#if errText}
        <div class="toast">
            <div class="alert alert-error">
                <div>
                    <IconAlertOctagon
                        class="stroke-current flex-shrink-0 w-6 h-6"
                    />
                    <div>
                        <span>{errText}</span>
                    </div>
                </div>
                <div class="flex-none">
                    <button
                        on:click={() => (errText = null)}
                        class="btn btn-sm current btn-circle">✕</button
                    >
                </div>
            </div>
        </div>
    {/if}

    <Footer />
</main>

<style lang="postcss">
</style>
