/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				pink: '#DB2777',
				textColor: '#333',
				titleColor: '#111827',
				iconColor: '#707070',
				sidebarIconColor: '#BE185D'
			},
			fontSize: {
				sidebarFont: '15px',
				textXs: '14px',
				title: '24px'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '210ms'
			},
			keyframes: {
				sladeInUp: {
					from: {
						opacity: 0,
						transform: 'translateY(100px)'
					},
					to: {
						opacity: 1,
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				sladeInUp: 'sladeInUp .3s ease-in-out'
			},
			gridTemplateColumns: {
				rootGrid: '1fr 370px'
			},
			boxShadow: {
				block: '0 3px 11px rgba(0, 0, 0, 0.4)'
			},
			backgroundColor: {
				overlay: 'rgba(0, 0, 0, .6)'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities, addComponents }) => {
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},
				'.flex-center': {
					display: 'flex',
					alignItems: 'center'
				},
				'.shadow-block': {
					boxShadow: '0 3px 11px rgba(0, 0, 0, 0.4)',
					borderRadius: '5px'
				}
			}),
				addComponents({
					'.btn-pink': {
						backgroundColor: '#DB2777',
						color: '#fff',
						fonsSize: '14px',
						borderRadius: '5px',
						fontWeight: '600'
					}
				})
		})
	]
}
