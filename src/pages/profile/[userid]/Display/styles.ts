import { styled } from '@/styles';

export const Container = styled('div', {});

export const TitleSection = styled('h2', {
	color: '$primary0',
	fontSize: '$lg',
	fontWeight: '$medium',
});

export const SectionsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	gap: '0.8rem',
});

export const InforsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
});

export const Section = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem',

	span: {
		fontWeight: '$medium',
	},
});
