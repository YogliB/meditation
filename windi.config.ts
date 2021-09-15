import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		extend: {
			fontFamily: {
				sans: ['Glory', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
				mono: ['Ubuntu Mono', 'monospace'],
				display: ['Balsamiq Sans', 'cursive'],
			},
		},
	},
});
