/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			},
			fontFamily: {
				default: ['Lato', 'sans-serif']
			},
			colors: {
				edo: '#ffa903'
			}
		}
	},
	plugins: []
};
