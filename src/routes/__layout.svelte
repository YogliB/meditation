<script>
	import 'virtual:windi.css';
	import { Navbar } from '$lib/components/molecules';
</script>


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
