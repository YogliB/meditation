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
		data-website-id="af781d65-2ff2-4209-b30f-d5f0ed1bbda8"
		src="https://umami.yogev.dev/umami.js"
		data-do-not-track="true"
		data-domains="there.yogev.dev"></script>
</svelte:head>
