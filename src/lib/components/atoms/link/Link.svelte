<script lang="ts">
	import { Icon } from '$lib/components/atoms';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import { tooltip } from '$lib/actions';

	export let href = '';
	export let rel = 'noreferrer noopener nofollow';
	export let target = '_blank';
	export let label = '';
	export let hideLabel = false;
	export let icon: IconDefinition = null;
	export let iconSize: 'small' | 'medium' | 'large' = 'medium';

	let isHovering = false;
</script>

<a
	{href}
	{rel}
	{target}
	use:tooltip={{ content: hideLabel ? label : null }}
	on:mouseenter={() => (isHovering = true)}
	on:mouseleave={() => (isHovering = false)}
	aria-label={label}
>
	{#if icon}
		<Icon {icon} size={iconSize} color={isHovering ? 'link' : null} />
	{/if}

	{#if label?.trim() && !hideLabel}
		<u class="text-blue-500">
			{label}
		</u>
	{/if}
</a>
