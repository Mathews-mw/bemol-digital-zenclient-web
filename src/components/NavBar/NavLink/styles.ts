import { styled } from '@/styles';

export const LinkContainer = styled('div', {
	a: {
		textDecoration: 'none',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		backgroundColor: '$surface400',
		color: '$neutral700',

		padding: '$1',
		borderRadius: '$sm',
	},

	'&:hover': {
		filter: 'brightness(0.9)',
	},

	'.activeLink': {
		color: '$primary500',
		backgroundColor: '$primary200',
	},
});
