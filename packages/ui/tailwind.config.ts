import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			typeWriter: ['"Special Elite"', 'monospace']
		}
	},

	plugins: []
} as Config;
