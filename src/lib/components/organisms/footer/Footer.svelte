<script lang="ts">
	import {
		faHeart,
		faChartLine,
		faEnvelope,
	} from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { Icon, Link } from '$lib/components/atoms';
	import { fade } from 'svelte/transition';

	let clazz = '';

	export { clazz as class };
</script>

<footer
	class={`flex justify-between items-center w-full absolute bottom-0  p-4 ${
		clazz ?? ''
	}`}
	in:fade
	out:fade
>
	<div class="flex items-center gap-4">
		<Link
			href="https://github.com/YogliB/meditation"
			icon={faGithub}
			iconSize="large"
			label="github"
			hideLabel={true}
		/>
		<Link
			href="https://umami.usethere.app/share/2BbTqn8D/there"
			icon={faChartLine}
			iconSize="large"
			label="analytics"
			hideLabel={true}
		/>
		<Link
			href="mailto:hey@usethere.app"
			icon={faEnvelope}
			iconSize="large"
			label="talk to us"
			hideLabel={true}
		/>
	</div>

	<div>
		Made with <Icon icon={faHeart} color="danger" /> by
		<Link href="https://yogev.dev" label="Yogev" />
	</div>
</footer>
