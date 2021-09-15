<script>
	import 'virtual:windi.css';
	import { Navbar } from '$lib/components/molecules';
	import { Head } from '$lib/components/organisms';
</script>

<Head />

<Navbar />

<main class="flex-grow flex justify-center items-center p-2">
	<slot />
</main>
