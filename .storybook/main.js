const preprocess = require('svelte-preprocess');
const WindiCSS = require('windicss-webpack-plugin').default;

module.exports = {
	stories: [
		'./**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf',
	],
	svelteOptions: {
		preprocess: preprocess(),
	},
	webpackFinal: (config) => {
		config.plugins.push(new WindiCSS());
		return config;
	},
};
