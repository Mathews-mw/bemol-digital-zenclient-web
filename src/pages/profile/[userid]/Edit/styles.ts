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

export const Form = styled('form', {
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',

	maxWidth: 500,
});

export const Section = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem',

	span: {
		fontWeight: '$medium',
	},
});

export const GroupButtons = styled('div', {
	display: 'flex',
	justifyContent: 'right',

	gap: '1rem',
});
