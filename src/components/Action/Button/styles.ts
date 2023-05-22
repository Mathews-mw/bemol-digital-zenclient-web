import { styled } from '@/styles';

export const ButtonElement = styled('button', {
	all: 'unset',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 16,

	fontSize: '$md',
	fontWeight: '$bold',
	fontFamily: '$default',
	boxSizing: 'border-box',
	padding: '0 $4',

	borderRadius: '$sm',

	cursor: 'pointer',

	'&:disabled': {
		cursor: 'not-allowed',
		background: '$neutral300',
		color: '$neutral700',
	},

	variants: {
		colorScheme: {
			blue: {
				background: '$secondary600',
				color: '$primary50',

				'&:hover:not([disabled])': {
					background: '$secondary500',
				},
			},

			tomato: {
				background: '$primary600',
				color: '$primary50',

				'&:hover:not([disabled])': {
					background: '$primary500',
				},
			},

			gray: {
				background: '$surface900',
				color: '$primary50',

				'&:hover:not([disabled])': {
					background: '$surface800',
				},
			},
		},

		size: {
			sm: {
				height: 28,
				padding: '0 $2',
			},

			md: {
				height: 36,
			},
		},
	},

	defaultVariants: {
		colorScheme: 'blue',
		size: 'md',
	},
});
