<script lang="ts">
	import Fonts from './Fonts.svelte';
	import SvelteSeo from 'svelte-seo';
	import type { SvelteSeoProps } from 'svelte-seo/types/SvelteSeo';

	export let seo: SvelteSeoProps = {};
</script>

<SvelteSeo {...seo} />
<Fonts />

<svelte:head>
	<meta charset="utf-8" />
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
