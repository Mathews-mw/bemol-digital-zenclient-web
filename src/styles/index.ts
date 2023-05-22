import { createStitches } from '@stitches/react';

export const { config, css, styled, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',

			primary0: '#191B1D',
			primary50: '#FFFFFF',
			primary100: '#FFEFED',
			primary200: '#FEE0DD',
			primary300: '#FDC1BB',
			primary400: '#FCA299',
			primary500: '#FB8377',
			primary600: '#FA6455',
			primary700: '#C85044',
			primary800: '#B6463A',
			primary850: '#963C33',
			primary900: '#642822',
			primary950: '#321411',

			secondary50: '#FFFFFF',
			secondary100: '#F3F7FF',
			secondary200: '#E5EEFF',
			secondary300: '#ACC8FF',
			secondary400: '#83ADFF',
			secondary500: '#5991FF',
			secondary600: '#3076FF',
			secondary700: '#296AEB',
			secondary800: '#265ECC',
			secondary850: '#1D4799',
			secondary900: '#132F66',
			secondary950: '#0A1833',

			surface50: '#FBFCFD',
			surface100: '#F6F7FA',
			surface200: '#F4F6F9',
			surface300: '#EFF3F5',
			surface400: '#EBEEF1',
			surface500: '#D5DCE2',
			surface600: '#C8D0D7',
			surface700: '#B3BCC3',
			surface800: '#919BA3',
			surface900: '#677178',

			neutral50: '#F7F9FB',
			neutral100: '#EFF2F5',
			neutral200: '#DFE4E8',
			neutral300: '#D7DCE2',
			neutral400: '#D0D6DD',
			neutral500: '#BFC6CD',
			neutral600: '#A0A7AF',
			neutral700: '#7F878D',
			neutral800: '#677178',
			neutral850: '#545D64',
			neutral900: '#3E464E',

			textColor: '#455a64',

			errorMsg: '#F75A68',
			dangerLight: '#F75A68',
			sucess: '#0EC755',
		},

		fonts: {
			default: 'Roboto, sans-serif',
			title: `'Baloo 2', cursive`,
		},

		space: {
			px: '1px',
			1: '0.25rem',
			2: '0.5rem',
			3: '0.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			10: '2.5rem',
		},

		fontSizes: {
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
		},

		fontWeights: {
			light: '300',
			regular: '400',
			medium: '500',
			bold: '700',
		},

		lineHeights: {
			shorter: '125%',
			short: '140%',
			base: '160%',
			tall: '180%',
		},

		radii: {
			xs: '2.5px',
			sm: '5px',
			md: '10px',
			lg: '20px',
			full: '99999px',
		},
	},
});
