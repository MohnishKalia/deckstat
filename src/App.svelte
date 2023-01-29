<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import Counter from "./lib/Counter.svelte";
    import Footer from "./lib/Footer.svelte";
</script>

<main>
    <Navbar />

    <div
        class="hero min-h-[50vh]"
        style="background-image: url(https://pixabay.com/get/g56099e0dbbb60c83bf99bb442ef35f48ea7babdca5a4efc601edbf54bf88d7d4d0ec9883f0fd5df4a8fc8d40032920c6_1280.jpg);"
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
                    <input
                        type="text"
                        id="decklist"
                        placeholder="Provide a link to a decklist"
                        class="input input-bordered w-full"
                    />
                </div>
            </div>
        </div>
    </div>

    <span class="badge">
        <Counter />
    </span>

    <Footer />
</main>

<style lang="postcss">
</style>
