<script lang="ts">
	let clazz: string = '';

	export { clazz as class };
	export let icon: string;
</script>

<svelte:head>
	<script
		src="https://kit.fontawesome.com/bea9b32e6f.js"
		crossorigin="anonymous"></script>
</svelte:head>

<i class={`${icon} ${clazz}`} on:click />
