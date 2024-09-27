<script>
	let peerAddress = '';

	function connectToPeer() {
		console.log("Connecting to peer:", peerAddress);
		// Add your peer connection logic here
	}
</script>

<main>
	<div class="storage-page">
		<h1>SHOW ME YOUR STORAGE</h1>
		<input type="text" bind:value={peerAddress} placeholder="Enter peer address" />
		<button on:click={connectToPeer}>Connect</button>
	</div>
</main>

<style>
	input, button {
		margin: 10px;
		padding: 10px;
	}
</style>