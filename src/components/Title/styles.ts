import { styled } from '@/styles';

export const TitleContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
});

export const TitleText = styled('h1', {
	color: '$neutral900',
	fontWeight: '$medium',
	fontSize: '$2xl',
});

export const Divider = styled('div', {
	display: 'flex',
	height: '1px',
	backgroundColor: '$neutral700',
	width: '100%',
});
