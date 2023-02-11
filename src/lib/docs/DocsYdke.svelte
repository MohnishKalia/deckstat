<script>
    import YDKE_EDOPro from "../../assets/docsimages/ydke/YDKE_EDOPro.jpeg";
    import YDKE_ygoprodeck from "../../assets/docsimages/ydke/YDKE_ygoprodeck.jpeg";
</script>

<h3 class="text-lg font-bold">ydke://</h3>
<p>A url based store of decklist information, used by 2 big platforms.</p>

<p class="py-4 text-sm">
    <i>Available through</i>: EDOPro, ygoprodeck.com
</p>

<div class="flex flex-col gap-4">
    <div>
        <h5 class="mb-2 text-md font-bold">EDOPro</h5>
        <ol class="mb-1 list-decimal list-inside space-y-1">
            <li>
                Navigate to the <code class="bg-base-300">Decks</code> screen
            </li>
            <li>
                Pick a deck and hit the <code class="bg-base-300">YDKE</code> button
            </li>
            <li>
                From here, hit the <code class="bg-base-300">Export</code> button
                to copy to clipboard
            </li>
        </ol>
        <p class="my-4 text-sm">Example below</p>
        <div class="p-4 bg-neutral rounded-box w-fit">
            <img
                width="640"
                height="415"
                src={YDKE_EDOPro}
                alt="EDOPro deck screen with ydke and export button highlighted"
            />
        </div>
    </div>

    <div>
        <h5 class="mb-2 text-md font-bold">ygoprodeck.com</h5>
        <ol class="mb-1 list-decimal list-inside space-y-1">
            <li>
                Navigate to <a
                    class="link"
                    href="https://ygoprodeck.com/deckbuilder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >https://ygoprodeck.com/deckbuilder/</a
                > or open an existing deck
            </li>
            <li>
                Once you have a deck, open the <code class="bg-base-300"
                    >Export</code
                > dropdown
            </li>
            <li>
                From here, hit the <code class="bg-base-300"
                    >To YDKe URL in Clipboard</code
                > button
            </li>
        </ol>
        <p class="my-4 text-sm">Example below</p>
        <div class="p-4 bg-neutral rounded-box w-fit">
            <img
                width="640"
                height="450"
                src={YDKE_ygoprodeck}
                alt="ygoprodeck.com deck screen with export dropdown open and ydke url button highlighted"
            />
        </div>
    </div>
</div>
