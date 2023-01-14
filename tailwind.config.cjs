/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
			maragsa: ['Maragsa', 'sans-serif']
		},
		extend: {
			colors: {
				brown: {
					50: '#F9F7F6',
					100: '#F2EFED',
					200: '#E4DCD8',
					300: '#D1C4BD',
					400: '#BEACA2',
					500: '#A78E81',
					600: '#9A7E6F',
					700: '#876D5E',
					800: '#725C50',
					900: '#514139'
				},
				yellow: {
					50: '#FDF9F1',
					100: '#FBF2DF',
					200: '#F7E6C4',
					300: '#F3D7A0',
					400: '#EDC473',
					500: '#E7B248',
					600: '#DD9D1D',
					700: '#C28A19',
					800: '#A27315',
					900: '#75530F'
				},
				green: {
					50: '#ECF4EB',
					100: '#D8E9D8',
					200: '#B5D5B4',
					300: '#8EBF8D',
					400: '#6BAB69',
					500: '#4F894D',
					600: '#406F3E',
					700: '#2F522E',
					800: '#20371F',
					900: '#0F1A0F'
				},
				red: {
					50: '#FDF2F2',
					100: '#FBE6E4',
					200: '#F7CDCA',
					300: '#F2B0AB',
					400: '#EB827A',
					500: '#E03C31',
					600: '#D02B1F',
					700: '#BA271C',
					800: '#9B2017',
					900: '#6F1711'
				}
			}
		}
	},
	plugins: []
};
