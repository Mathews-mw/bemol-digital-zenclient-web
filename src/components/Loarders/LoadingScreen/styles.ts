import { styled } from '@/styles';
import { motion } from 'framer-motion';

export const Container = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	width: '100%',
	height: '100vh',
});

export const Circle = styled(motion.span, {
	display: 'block',
	width: '3rem',
	height: '3rem',

	borderRadius: '50%',
	boxSizing: 'border-box',

	variants: {
		colorSchema: {
			tomato: {
				border: '0.2rem solid $primary200',
				borderTop: '0.2rem solid $primary500',
			},

			blue: {
				border: '0.2rem solid $secondary200',
				borderTop: '0.2rem solid $secondary500',
			},

			light: {
				border: '0.2rem solid transparent',
				borderTop: '0.2rem solid $white',
			},
		},
	},

	defaultVariants: {
		colorSchema: 'tomato',
	},
});
