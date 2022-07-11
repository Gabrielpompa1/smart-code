/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			...colors,
			'electric-green': '#72FF13',
			'neon-green': '#1FFF0F',
		},
		extend: {},
	},
	plugins: [],
};
