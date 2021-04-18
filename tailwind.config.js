// const colors = require('tailwindcss/colors')

module.exports = {
	// purge: [
	// 	'./src/components/**/*.{js,ts,jsx,tsx}',
	// 	'./src/pages/**/*.{js,ts,jsx,tsx}',
	// ],
	// purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	variants: {
		extend: {
			textColor: [
				'responsive',
				'hover',
				'group-hover',
				'focus',
				'active',
				'first',
			],
			borderWidth: ['last', 'first'],
			borderRadius: ['last', 'first'],
			padding: ['last', 'first'],
			backgroundColor: ['active', 'first', 'group-focus', 'group-hover'],
			display: ['group-hover'],
			fontWeight: ['first'],

			// colors: ['active'],
		},
	},
	theme: {
		extend: {
			fontFamily: {
				heading: ['Inter', 'sans-serif'],
				base: ['Roboto', 'sans-serif'],
			},
			colors: {
				'primary-bg': '#0F1111',
				'secondary-bg': '#171819',
				// 'tertiary-bg': '#1f1f27',
				'tertiary-bg': '#232526',
				'quartiary-bg': '#2f3233',
				// 'primary-color': '#1E75FF',
				'primary-color': '#FF514D',
				'primary-complementary-color': '#ffbc51',
				'primary-triadic-color-1': '#4dff51',
				'positive-cta-color': '#94ff51',
				'negative-cta-color': '#ff5194',
				'primary-border': '#2C2C36',
				'secondary-border': '#4b4b5c',
				'primary-text': 'white',
				'secondary-text': '#88898E',
			},
			outline: {
				'secondary-border': [`2px solid #4f4f5A`, '1px'],
			},
			borderWidth: {
				3: '3px',
			},
			padding: {
				'6.25%': '6.25%',
				'9.375%': '9.375%',
				'12.5%': '12.5%',
				'15%': '15%',
				'18.75%': '18.75%',
				'25%': '25%',
			},
			inset: {
				'6.25%': '6.25%',
				'9.375%': '9.375%',
				'12.5%': '12.5%',
				'15%': '15%',
				'18.75%': '18.75%',
				'25%': '25%',
			},
			margin: {
				30: '7.5rem',
				'12.5%': '12.5%',
				'18.75%': '18.75%',
			},
			borderWidth: {
				1: '1px',
			},
			height: {
				fit: 'fit-content',
			},
			width: {
				fit: 'fit-content',
				'1/16': '6.25%',
			},
			letterSpacing: {
				ultrawide: '10px',
			},
			gridTemplateColumns: {
				13: 'repeat(13, minmax(0, 1fr))',
				14: 'repeat(14, minmax(0, 1fr))',
				15: 'repeat(15, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
	],
};
