import { styled } from '@/styles';
import InputMask from 'react-input-mask';

export const InputTextContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: 6,
});

export const Label = styled('label', {
	color: '$neutral700',
	fontWeight: '$bold',
	textTransform: 'uppercase',
	fontSize: '$sm',
});

export const TextInputContainer = styled('div', {
	position: 'relative',

	backgroundColor: '$surface200',
	padding: '10px 16px',
	border: '1px solid transparent',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'center',
	width: '100%',

	transition: 'all 100ms ease-in-out',

	'&:has(input:focus)': {
		border: '1px solid $secondary500',
	},

	'&:has(input:disabled)': {
		opacity: 0.5,
		cursor: 'not-allowed',
	},

	svg: {
		color: '$neutral700',
	},
});

export const Prefix = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$neutral500',
	fontWeight: '$regular',
});

export const Input = styled(InputMask, {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$textColor',
	fontWeight: '$regular',
	background: 'transparent',
	border: 0,
	width: '100%',

	'&:focus': {
		outline: 0,
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	'&::placeholder': {
		color: '$neutral500',
	},
});

export const ButtonEyeView = styled('button', {
	all: 'unset',

	position: 'absolute',
	display: 'flex',
	right: 16,
	alignSelf: 'center',
	alignItems: 'center',
	justifyContent: 'center',

	border: 'none',
	background: 'none',

	color: '$neutral700',
});
