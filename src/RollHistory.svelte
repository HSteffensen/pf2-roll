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

<div>
    {#each rolls as roll}
        <RollHistoryItem result={roll} />
    {:else}
        No dice roll history yet.
    {/each}
</div>
