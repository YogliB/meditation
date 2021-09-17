<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import type { IconColor } from './models';

	export let icon: IconDefinition = null;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let color: IconColor = null;

	$: iconSize = size === 'small' ? 'sm' : size === 'large' ? '2x' : null;
	$: iconColor =
		color === 'primary'
			? 'var(--color-primary)'
			: color === 'info'
			? 'var(--color-info)'
			: color === 'link'
			? 'var(--color-link)'
			: color === 'success'
			? 'var(--color-success)'
			: color === 'warning'
			? 'var(--color-warning)'
			: color === 'danger'
			? 'var(--color-danger)'
			: color === 'light'
			? 'var(--color-light)'
			: color === 'dark'
			? 'var(--color-dark)'
			: null;
</script>

<Fa {icon} size={iconSize} color={iconColor} />
