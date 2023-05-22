import { styled } from '@/styles';

export const Container = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	width: '100%',
	padding: '2rem 0',
});

export const Logo = styled('span', {
	fontWeight: '$bold',
	fontFamily: '$title',
	fontSize: '$2xl',

	color: '$primary600',
});

export const NavContainer = styled('div', {
	display: 'flex',
	gap: '1rem',
});

export const VDivider = styled('div', {
	display: 'flex',
	height: 32,
	width: 1,
	background: '$neutral500',
});

export const ManagementContainer = styled('div', {
	display: 'flex',
	gap: '1rem',
});

export const UserInfosContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',

	'.user-name': {
		color: '$neutral700',
		fontSize: '$sm',
	},
});

export const LogoutButton = styled('button', {
	all: 'unset',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	color: '$secondary500',

	padding: '$1',
	borderRadius: '$sm',

	cursor: 'pointer',

	'&:hover': {
		filter: 'brightness(0.9)',
	},
});

export const SignoutModalContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	padding: '2rem',
	gap: '1rem',

	fontFamily: '$default',

	h3: {
		color: '$textColor',
	},

	'.btn-group': {
		display: 'flex',
		justifyContent: 'end',
		gap: '1rem',
	},
});
