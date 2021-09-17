<script lang="ts">
	export let href = '';
	export let rel = 'noreferrer noopener nofollow';
	export let target = '_blank';
	export let label = '';
</script>

<a {href} {rel} {target}>
	<u class="text-blue-500">
		{label}
	</u>
</a>
