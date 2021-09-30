<script lang="ts">
	import 'virtual:windi.css';
	import '$lib/styles/main.scss';

	import { Navbar } from '$lib/components/molecules';
	import { Head, Footer } from '$lib/components/organisms';
	import { website } from '$lib/config/website';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	import * as Sentry from '@sentry/browser';
	import { Integrations } from '@sentry/tracing';

	import type { SvelteSeoProps } from 'svelte-seo/types/SvelteSeo';
	import type { Unsubscriber } from 'svelte/store';
	import type { TimerState } from '$lib/types';

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
	let timerState: TimerState;
	let unsubscribe: Unsubscriber;

	onMount(() => {
		Sentry.init({
			dsn: 'https://640abe304070430dac810d8d66cfd577@o1014493.ingest.sentry.io/5979706',
			integrations: [new Integrations.BrowserTracing()],
			tracesSampleRate: 1.0,
		});

		unsubscribe = appState.subscribe(
			(state) => (timerState = state.timerState)
		);

		return unsubscribe;
	});
</script>

<Head {seo} />

<Navbar />

<main class="flex-grow flex justify-center items-center p-2">
	<slot />
</main>

{#if !timerState || timerState === 'off'}
	<Footer />
{/if}
