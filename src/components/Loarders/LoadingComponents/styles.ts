import { styled } from '@/styles';
import { motion } from 'framer-motion';

export const Container = styled('div', {
	position: 'relative',
	width: '1rem',
	height: '1rem',
});

export const Circle = styled(motion.span, {
	display: 'block',
	width: '1.2rem',
	height: '1.2rem',

	borderRadius: '50%',
	position: 'absolute',
	boxSizing: 'border-box',
	top: 0,
	left: 0,

	variants: {
		colorSchema: {
			tomato: {
				border: '0.15rem solid $primary200',
				borderTop: '0.15rem solid $primary500',
			},

			blue: {
				border: '0.15rem solid $secondary200',
				borderTop: '0.15rem solid $secondary500',
			},

			light: {
				border: '0.15rem solid transparent',
				borderTop: '0.15rem solid $white',
			},
		},
	},
});
