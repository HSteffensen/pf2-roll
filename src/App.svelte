<script lang="ts">
	import RollHistory from "./RollHistory.svelte";
</script>

<div id="main-grid">
	main panel
	<div id="history-panel">
		<RollHistory />
	</div>
</div>

<style>
	#main-grid {
		display: grid;
		grid-template: 100vh / 1fr 20rem;
	}

	#history-panel {
		border-left: black solid 1px;
		padding: 4px;
		max-height: 100vw;
		box-sizing: content-box;
	}
</style>
