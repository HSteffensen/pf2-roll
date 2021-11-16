<script lang="ts">
    import { onDestroy } from "svelte";

    import { mostRecentDiceRoll } from "./dice-result";
    import RollHistoryItem from "./RollHistoryItem.svelte";

    let rolls: number[] = [];
    let unsubscribe = mostRecentDiceRoll.subscribe((rollResult) => {
        if (rollResult) rolls = [...rolls, rollResult];
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="outer">
    <div>Dice roll history</div>
    <ul class="history">
        {#each rolls as roll}
            <RollHistoryItem result={roll} />
        {:else}
            <li>No dice roll history yet.</li>
        {/each}
    </ul>
    <div>footer</div>
</div>

<style>
    div.outer {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template: 2rem 1fr 2rem / 100%;
        overflow: hidden;
    }
    ul {
        overflow: auto;
        list-style: none outside;
        padding: 0 0 0 1rem;
    }
</style>
