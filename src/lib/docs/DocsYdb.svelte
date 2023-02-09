<script>
    import Neuron_DeckOpts from "../../assets/docs_images/Neuron_DeckOpts.png";
    import Neuron_EditView from "../../assets/docs_images/Neuron_EditView.png";
    import Neuron_PrivacyToggle from "../../assets/docs_images/Neuron_PrivacyToggle.png";
    import Neuron_ViewView from "../../assets/docs_images/Neuron_ViewView.png";
    import Neuron_ShareNotes from "../../assets/docs_images/Neuron_ShareNotes.png";
</script>

<h3 class="text-lg font-bold">Neuron / YGO Card DB</h3>
<p>This is the offical method of storing and transferring decklists.</p>

<p class="my-4 text-sm">
    <i>Available through</i>: Neuron App, db.yugioh-card.com
</p>

<h5 class="mb-2 text-md font-bold">Mobile (Neuron App)</h5>
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
        Within, change the <code class="bg-base-300">Privacy settings</code> toggle
        from OFF to ON
    </li>
    <li>
        Back out and enter the view screen of the deck, hit the <code
            class="bg-base-300">Share Deck</code
        > button at the bottom
    </li>
    <li>
        Open the share in Notes or equivalent and the <code class="bg-base-300"
            >decklist url</code
        > should be visible!
    </li>
</ol>

<p class="my-4 text-sm">Image walkthrough below: <kbd>Shift + Scroll or Swipe</kbd></p>

<div
    class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box"
>
    <div class="carousel-item">
        <img
            class="max-w-[15rem]"
            src={Neuron_DeckOpts}
            alt="Decks screen view with edit and view buttons"
        />
    </div>
    <div class="carousel-item">
        <img
            class="max-w-[15rem]"
            src={Neuron_EditView}
            alt="Deck edit screen with tag button highlighted"
        />
    </div>
    <div class="carousel-item">
        <img
            class="max-w-[15rem]"
            src={Neuron_PrivacyToggle}
            alt="Deck info screen with privacy toggle on"
        />
    </div>
    <div class="carousel-item">
        <img
            class="max-w-[15rem]"
            src={Neuron_ViewView}
            alt="Deck view screen with share button highlighted"
        />
    </div>
    <div class="carousel-item">
        <img
            class="max-w-[15rem]"
            src={Neuron_ShareNotes}
            alt="Notes sharing view with decklist url highlighted"
        />
    </div>
</div>
