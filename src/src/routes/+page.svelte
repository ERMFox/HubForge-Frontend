<script>
	// Import the NavBar component from the components folder
	import NavBar from '../components/NavBar.svelte';
	import SideBar from "../components/SideBar.svelte";
</script>

<main>
	<NavBar />
	<div class="container">
		<SideBar />
		<h1>Welcome to HubForge</h1>
	</div>



	<!-- Other content or components go here -->
</main>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
</style>