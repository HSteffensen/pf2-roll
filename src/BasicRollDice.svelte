<script lang="ts">
    import { mostRecentDiceRoll } from "./dice-result";

    let diceSize = 20;
    let diceCount = 1;
    let bonus = 0;
    export let result = 0;

    function roll() {
        result = bonus;
        for (var i = 0; i < diceCount; i++) {
            result += Math.ceil(Math.random() * diceSize);
        }
        $mostRecentDiceRoll = result;
    }
</script>

<div>
    <button on:click={roll}>Roll</button>
    <input type="number" bind:value={diceCount} />
    d<input type="number" bind:value={diceSize} />
    +<input type="number" bind:value={bonus} />
</div>

<style>
    input {
        width: 8ch;
    }
</style>
