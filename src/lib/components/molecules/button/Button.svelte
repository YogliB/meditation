<script lang="ts">
	import { Icon } from '$lib/components/atoms';
	import type { ButtonColor, ButtonType, ButtonSize } from './models';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import { tooltip } from '$lib/actions';

	let clazz: string = '';

	export { clazz as class };
	export let style: string = '';
	export let color: ButtonColor = 'primary';
	export let disabled = false;
	export let icon: IconDefinition;
	export let isLoading = false;
	export let isRounded = false;
	export let label: string = '';
	export let hideLabel = false;
	export let size: ButtonSize = 'normal';
	export let type: ButtonType = 'button';
</script>

<button
	aria-label={label}
	class={`button ${clazz}`}
	class:is-primary={color === 'primary'}
	class:is-link={color === 'link'}
	class:is-info={color === 'info'}
	class:is-success={color === 'success'}
	class:is-warning={color === 'warning'}
	class:is-danger={color === 'danger'}
	class:is-small={size === 'small'}
	class:is-normal={size === 'normal'}
	class:is-medium={size === 'medium'}
	class:is-large={size === 'large'}
	class:is-loading={isLoading}
	class:is-rounded={isRounded}
	{disabled}
	{type}
	{style}
	on:click
	use:tooltip={{ content: hideLabel ? label : null }}
>
	{#if icon}
		<span
			class="icon"
			class:is-small={size === 'small'}
			class:is-medium={size === 'medium'}
			class:is-large={size === 'large'}
		>
			<Icon {icon} />
		</span>
	{/if}

	{#if !hideLabel}
		{label}
	{/if}
</button>

<style lang="scss" global>
	@import 'bulma/sass/utilities/_all.sass';
	@import 'bulma/sass/elements/button.sass';
</style>
