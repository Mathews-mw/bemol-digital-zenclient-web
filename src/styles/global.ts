import { globalCss } from '.';

export const globalStyles = globalCss({
	'*': {
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
	},

	body: {
		backgroundColor: '$surface100',
		color: '$textColor',
		'-webkit-font-smoothing': 'antialised',
	},

	'body, input, textarea, button': {
		fontWeight: 400,
	},
});
