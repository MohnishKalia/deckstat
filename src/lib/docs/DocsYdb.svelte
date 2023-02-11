<script>
    import Neuron_DeckOpts from "../../assets/docsimages/neuron/Neuron_DeckOpts.jpeg";
    import Neuron_EditView from "../../assets/docsimages/neuron/Neuron_EditView.jpeg";
    import Neuron_PrivacyToggle from "../../assets/docsimages/neuron/Neuron_PrivacyToggle.jpeg";
    import Neuron_ViewView from "../../assets/docsimages/neuron/Neuron_ViewView.jpeg";
    import Neuron_ShareNotes from "../../assets/docsimages/neuron/Neuron_ShareNotes.jpeg";
</script>

<h3 class="text-lg font-bold">Neuron / YGO Card DB</h3>
<p>This is the offical method of storing and transferring decklists.</p>

<p class="my-4 text-sm">
    <i>Available through</i>: Neuron App, db.yugioh-card.com
</p>

<div class="flex flex-col gap-4">
    <div>
        <h5 class="mb-2 text-md font-bold">Neuron App (Mobile)</h5>
        <ol class="mb-1 list-decimal list-inside space-y-1">
            <li>
                Start by opening the Neuron App and navigating to the <code
                    class="bg-base-300">Decks</code
                > screen
            </li>
            <li>
                Edit a deck and hit the <code class="bg-base-300">tag</code> button
            </li>
            <li>
                Within, change the <code class="bg-base-300"
                    >Privacy settings</code
                > toggle from OFF to ON
            </li>
            <li>
                Back out and enter the view screen of the deck, hit the <code
                    class="bg-base-300">Share Deck</code
                > button at the bottom
            </li>
            <li>
                Open the share in Notes or equivalent and the <code
                    class="bg-base-300">decklist url</code
                > should be visible!
            </li>
        </ol>
        <p class="my-4 text-sm">
            Image walkthrough below: <kbd>Shift + Scroll or Swipe</kbd>
        </p>
        <div
            class="carousel carousel-center max-w-2xl p-4 space-x-4 bg-neutral rounded-box"
        >
            <div class="carousel-item">
                <img
                    class="max-w-[15rem] aspect-[37/80]"
                    width="296"
                    height="640"
                    src={Neuron_DeckOpts}
                    alt="Decks screen view with edit and view buttons"
                />
            </div>
            <div class="carousel-item">
                <img
                    class="max-w-[15rem] aspect-[37/80]"
                    width="296"
                    height="640"
                    src={Neuron_EditView}
                    alt="Deck edit screen with tag button highlighted"
                />
            </div>
            <div class="carousel-item">
                <img
                    class="max-w-[15rem] aspect-[37/80]"
                    width="296"
                    height="640"
                    src={Neuron_PrivacyToggle}
                    alt="Deck info screen with privacy toggle on"
                />
            </div>
            <div class="carousel-item">
                <img
                    class="max-w-[15rem] aspect-[37/80]"
                    width="296"
                    height="640"
                    src={Neuron_ViewView}
                    alt="Deck view screen with share button highlighted"
                />
            </div>
            <div class="carousel-item">
                <img
                    class="max-w-[15rem] aspect-[37/80]"
                    width="296"
                    height="640"
                    src={Neuron_ShareNotes}
                    alt="Notes sharing view with decklist url highlighted"
                />
            </div>
        </div>
    </div>

    <div>
        <h5 class="mb-2 text-md font-bold">db.yugioh-card.com (Desktop)</h5>
        <ol class="mb-1 list-decimal list-inside space-y-1">
            <li>
                <i>Documentation coming soon</i>
            </li>
        </ol>
    </div>
</div>
