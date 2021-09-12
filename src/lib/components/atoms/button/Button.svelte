<script lang="ts">
	import { Icon } from '../icon';
	import type { ButtonColor, ButtonType, ButtonSize } from './models';

	export let color: ButtonColor = 'primary';
	export let disabled = false;
	export let icon: string = '';
	export let isLoading = false;
	export let isRounded = false;
	export let label: string = '';
	export let size: ButtonSize = 'normal';
	export let type: ButtonType = 'button';
</script>

<button
	class="button"
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
	on:click
>
	{#if icon?.trim()}
		<span
			class="icon"
			class:is-small={size === 'small'}
			class:is-medium={size === 'medium'}
			class:is-large={size === 'large'}
		>
			<Icon {icon} />
		</span>
	{/if}

	{label ?? ''}
</button>

<style lang="scss" global>
	@import 'bulma/sass/utilities/_all.sass';
	@import 'bulma/sass/elements/button.sass';
</style>
