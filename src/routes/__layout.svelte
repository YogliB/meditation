<script lang="ts">
	import 'virtual:windi.css';
	import '$lib/styles/main.scss';

	import { Navbar } from '$lib/components/molecules';
	import { Head, Footer } from '$lib/components/organisms';
	import { website } from '$lib/config/website';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	import type { SvelteSeoProps } from 'svelte-seo/types/SvelteSeo';
	import type { Unsubscriber } from 'svelte/store';

	let seo: SvelteSeoProps = {
		title: website.siteTitle,
		description: website.siteDescription,
		keywords: website.siteKeywords,
		openGraph: {
			description: website.siteDescription,
			title: website.siteTitle,
			type: 'website',
			url: 'https://there.yogev.dev',
		},
		twitter: {
			description: website.siteDescription,
			image: 'https://there.yogev.dev/images/twitter.webp',
			imageAlt: 'there - be there for your self',
			site: 'https://there.yogev.dev',
			title: 'there - be there for your self',
		},
	};
	let isInSession = false;
	let unsubscribe: Unsubscriber;

	onMount(() => {
		unsubscribe = appState.subscribe(
			(state) => (isInSession = state.isInSession)
		);

		return unsubscribe;
	});
</script>

<Head {seo} />

<Navbar />

<main class="flex-grow flex justify-center items-center p-2">
	<slot />
</main>

{#if !isInSession}
	<Footer />
{/if}
