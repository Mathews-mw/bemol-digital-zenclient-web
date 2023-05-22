import { styled } from '@/styles';

export const ImageFrame = styled('div', {
	borderRadius: '$full',

	background: '$primary400',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	img: {
		borderRadius: '$full',
		objectFit: 'cover',
	},
});

export const LettersContainer = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	background: '$primary400',
	color: '$white',
	borderRadius: '$full',

	fontWeight: 700,
});
