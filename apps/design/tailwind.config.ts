import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				'sd-yellow': '#ffb703',
				'sd-orange': '#ffa903'
			},
			fontFamily: {
				typeWriter: ['"Special Elite"', 'monospace'],
				shrikhand: ['Shrikhand', 'cursive'],
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
