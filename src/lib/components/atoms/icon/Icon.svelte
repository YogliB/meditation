<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	export let icon: IconDefinition;
</script>

<Fa {icon} />
