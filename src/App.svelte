<script lang="ts">
	import RollDice from "./RollDice.svelte";
	import RollHistory from "./RollHistory.svelte";
</script>

<div class="main-grid">
	<RollDice />
	<div class="history-panel">
		<RollHistory />
	</div>
</div>

<style>
	div.main-grid {
		display: grid;
		grid-template: 100vh / 1fr 20rem;
	}

	div.history-panel {
		resize: horizontal;
		border-left: black solid 1px;
		padding: 4px;
	}
</style>
