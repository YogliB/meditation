<script lang="ts">
	import { faHeart } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { Icon, Link } from '$lib/components/atoms';
</script>

<footer class="flex justify-between items-center p-4">
	<Link
		href="https://github.com/YogliB/meditation"
		icon={faGithub}
		iconSize="large"
		label="Github"
		hideLabel={true}
	/>

	<div>
		Made with <Icon icon={faHeart} /> by
		<Link href="https://yogev.dev" label="Yogev" />
	</div>
</footer>

<style>
	div {
		color: var(--color-link);
	}
</style>
