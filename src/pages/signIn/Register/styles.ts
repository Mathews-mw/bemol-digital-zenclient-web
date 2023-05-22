import { styled } from '@/styles';

export const Container = styled('div', {
	margin: '2rem auto 0rem',
	padding: '0 10rem',

	maxWidth: '1180px',
	minWidth: '300px',
});

export const Form = styled('form', {
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
});

export const Section = styled('div', {
	display: 'grid',
	gridGap: '1rem',
	gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
});

export const ButtonsContainer = styled('div', {
	display: 'flex',
	justifyContent: 'right',

	gap: '1rem',
});
