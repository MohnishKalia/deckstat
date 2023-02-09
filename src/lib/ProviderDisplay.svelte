<script lang="ts">
    export let provider: string;
    export let example: string;
    export let disabled: boolean;

    $: disabledProvider = disabled ? "opacity-40" : "";
</script>

<div class="alert shadow-lg items-start {disabledProvider}">
    <div>
        <slot name="icon" />
        <div class="sm:max-w-none max-w-[15rem]">
            {#if disabled}
                <p class="text-sm font-semibold">currently unavailable</p>
            {/if}
            <h3 class="font-bold">{provider}</h3>
            <p class="text-xs italic whitespace-pre-wrap break-words">
                eg. <u>{example}</u>
            </p>
        </div>
    </div>
</div>
