<script>
	import 'virtual:windi.css';
	import { Navbar } from '$lib/components/molecules';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Glory&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar />

<main class="flex-grow flex justify-center items-center p-2">
	<slot />
</main>

<style global>
	:root {
		font-family: 'Glory', sans-serif;
	}

	body {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
