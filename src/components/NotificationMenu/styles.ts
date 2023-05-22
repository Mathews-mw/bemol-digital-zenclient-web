import { styled, keyframes, theme } from '@/styles';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentStyles = {
	backgroundColor: theme.colors.white,
	borderRadius: 6,
	padding: 5,
	zIndex: 999,
	boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
	animationDuration: '400ms',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	willChange: 'transform, opacity',
	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
};

const itemStyles = {
	all: 'unset',
	fontSize: 16,
	lineHeight: '200%',
	color: theme.colors.primary500,
	borderRadius: 3,
	display: 'flex',
	alignItems: 'center',
	padding: '0 5px',
	position: 'relative',
	paddingLeft: 25,
	userSelect: 'none',

	'&[data-disabled]': {
		color: theme.colors.primary500,
		pointerEvents: 'none',
	},

	'&[data-highlighted]': {
		backgroundColor: theme.colors.primary500,
		color: theme.colors.primary500,
	},
};

export const DropdownMenuArrow = styled(DropdownMenu.Arrow, { fill: theme.colors.white });
export const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);
export const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);
export const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem, itemStyles);

export const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator, {
	position: 'absolute',
	left: 0,
	width: 25,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const IconButton = styled('button', {
	all: 'unset',
	borderRadius: '100%',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',

	color: '$secondary500',

	'&:hover': { filter: 'brightness(0.9)' },
});

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	justifyContent: 'center',
	alignContent: 'center',

	padding: '1rem',

	fontFamily: '$default',
	fontSize: '$sm',

	img: {
		display: 'flex',
		alignSelf: 'center',
	},
});
