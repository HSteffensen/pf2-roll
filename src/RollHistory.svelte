<script lang="ts">
    import { afterUpdate, beforeUpdate, onDestroy } from "svelte";
    import BasicRollDice from "./BasicRollDice.svelte";

    import { mostRecentDiceRoll } from "./dice-result";
    import RollHistoryItem from "./RollHistoryItem.svelte";

    let rolls: number[] = [];
    let unsubscribe = mostRecentDiceRoll.subscribe((rollResult) => {
        if (rollResult) rolls = [...rolls, rollResult];
    });
    let scroller;
    let autoscroll = true;

    beforeUpdate(() => {
        autoscroll =
            scroller &&
            scroller.offsetHeight + scroller.scrollTop >
                scroller.scrollHeight - 20;
    });
    afterUpdate(() => {
        if (autoscroll) scroller.scrollTo(0, scroller.scrollHeight);
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div id="outer">
    <ul id="historyList" bind:this={scroller}>
        {#each rolls as roll}
            <RollHistoryItem result={roll} />
        {:else}
            <li>No dice roll history yet.</li>
        {/each}
    </ul>
    <BasicRollDice />
</div>

<style>
    #outer {
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
    }
    #historyList {
        overflow: auto;
        list-style: none outside;
        padding: 0 0 0 1rem;
        margin: 0;
        flex: 1;
    }
</style>
