<script lang="ts">
	import { faHeart, faChartLine } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { Icon, Link } from '$lib/components/atoms';
</script>

<footer class="flex justify-between items-center p-4">
	<div class="flex items-center gap-4">
		<Link
			href="https://github.com/YogliB/meditation"
			icon={faGithub}
			iconSize="large"
			label="Github"
			hideLabel={true}
		/>
		<Link
			href="https://umami.yogev.dev/share/5nlNtN8g/there"
			icon={faChartLine}
			iconSize="large"
			label="Analytics"
			hideLabel={true}
		/>
	</div>

	<div>
		Made with <Icon icon={faHeart} color="danger" /> by
		<Link href="https://yogev.dev" label="Yogev" />
	</div>
</footer>
