<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta
	title="Atoms/Button"
	component={Button}
	argTypes={{
		color: {
			options: [
				'primary',
				'link',
				'info',
				'success',
				'warning',
				'danger',
			],
		},
		disabled: { control: 'boolean' },
		icon: { control: 'text' },
		isLoading: { control: 'boolean' },
		isRounded: { control: 'boolean' },
		label: { control: 'text' },
		size: { options: ['small', 'normal', 'medium', 'large'] },
		type: { options: ['button', 'submit', 'reset'] },
	}}
/>

<Template let:args>
	<Button {...args} />
</Template>

<Story
	name="Primary"
	args={{
		color: 'primary',
		label: 'Hit Me!',
	}}
/>

<Story
	name="Disabled"
	args={{
		disabled: true,
		label: 'Hit Me!',
	}}
/>

<Story
	name="With icon"
	args={{
		icon: 'fas fa-dice',
		label: 'Feeling lucky, punk?!',
	}}
/>
