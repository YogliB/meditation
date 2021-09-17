<script lang="ts">
	import { faHeart } from '@fortawesome/free-solid-svg-icons';
	import { Icon, Link } from '$lib/components/atoms';
</script>

<footer class="flex justify-center items-center p-4 bg-light-100">
	<div>
		Made with <Icon icon={faHeart} /> by
		<Link href="https://yogev.dev" label="Yogev" />
	</div>
</footer>
