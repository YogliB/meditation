<script lang="ts">
	import 'virtual:windi.css';
	import '$lib/styles/main.scss';

	import { Navbar } from '$lib/components/molecules';
	import { Head, Footer } from '$lib/components/organisms';
	import { website } from '$lib/config/website';
	import type { SvelteSeoProps } from 'svelte-seo/types/SvelteSeo';

	let seo: SvelteSeoProps = {
		title: website.siteTitle,
		description: website.siteDescription,
		keywords: website.siteKeywords,
		twitter: {
			description: website.siteDescription,
			image: 'https://there.yogev.dev/images/twitter.webp',
			imageAlt: 'there - be there for your self',
			site: 'https://there.yogev.dev',
			title: 'there - be there for your self',
		},
	};
</script>

<Head {seo} />

<Navbar />

<main class="flex-grow flex justify-center items-center p-2">
	<slot />
</main>

<Footer />
