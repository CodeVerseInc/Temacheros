import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				body: 'Rubik Dirt'
			},
			colors: {
				'bg-deg': '#060606',
				'bg-deg-2': '#5D5D5D',
				'color-mayus': '#F00404',
				'color-bg-component': '#888888',
				'color-bg-button': '#888888',
				'color-bg-button-2': '#5D5D5D',
				'color-text-advertisement': '#888888',
				'color-gray-light': '#1b1b1b'
			},
			container: {
				center: true
			}
		}
	},
	plugins: []
}

export default config
