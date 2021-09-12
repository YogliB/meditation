<script>
	import 'virtual:windi.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Glory&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="h-screen">
	<slot />
</main>

<style global>
	:root {
		font-family: 'Glory', sans-serif;
	}
</style>
