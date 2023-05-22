import { styled } from '@/styles';

export const Container = styled('div', {
	margin: '2rem auto 0rem',
	padding: '0 10rem',

	maxWidth: '820px',
	minWidth: '300px',
});

export const LogoContainer = styled('div', {
	display: 'flex',
	gap: 2,

	justifyContent: 'center',
});

export const Logo = styled('span', {
	fontWeight: '$bold',
	fontSize: '$2xl',

	variants: {
		colorType: {
			prymary: {
				color: '$primary500',
			},

			secondaty: {
				color: '$primary700',
			},
		},
	},
});

export const Form = styled('form', {
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
});

export const FooterContainer = styled('div', {
	display: 'flex',
	justifyContent: 'center',

	gap: '$1',
});

export const RegisterButton = styled('button', {
	all: 'unset',

	fontWeight: '$bold',

	color: '$primary600',

	cursor: 'pointer',

	'&:hover': {
		color: '$primary500',
	},
});
