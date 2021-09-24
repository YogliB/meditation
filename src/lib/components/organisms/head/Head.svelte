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
	<meta name="”robots”" content="index, follow" />

	<script
		async
		defer
		data-website-id="a34beffe-d368-44ba-b212-2a1ebe8757a5"
		src="https://umami.usethere.app/umami.js"
		data-do-not-track="true"
		data-domains="usethere.app"></script>
</svelte:head>
