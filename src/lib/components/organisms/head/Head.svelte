<script lang="ts">
	import Fonts from './Fonts.svelte';
	import PWA from './PWA.svelte';
	import SvelteSeo from 'svelte-seo';
	import type { SvelteSeoProps } from 'svelte-seo/types/SvelteSeo';

	export let seo: SvelteSeoProps = {};
</script>

<SvelteSeo {...seo} />
<Fonts />
<PWA />

<svelte:head>
	<meta charset="utf-8" />
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<script
		async
		defer
		data-website-id="5e3b43de-968a-41dd-a29a-9bdf70522572"
		src="https://umami.yogev.dev/umami.js"
		data-do-not-track="true"
		data-domains="yogev.dev"></script>
</svelte:head>
