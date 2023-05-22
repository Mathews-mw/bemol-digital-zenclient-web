import { styled } from '@/styles';

export const DividerLine = styled('hr', {
	border: 0,
	height: '1px',
	background: '#333',
	backgroundImage: `linear-gradient(
    to right,
    $neutral500,
    $neutral500,
    $neutral500
  )`,

	margin: '1rem 0',
});
