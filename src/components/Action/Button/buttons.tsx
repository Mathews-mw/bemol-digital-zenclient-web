import { ComponentProps, ElementType, ReactNode } from 'react';
import { ButtonElement } from './styles';
import { LoadingComponents } from '@/components/Loarders/LoadingComponents';

export interface IButtonProps extends ComponentProps<typeof ButtonElement> {
	children: ReactNode;
	colorScheme?: 'blue' | 'tomato' | 'gray';
	size?: 'sm' | 'md';
	loading?: boolean;
	as?: ElementType;
}

export function Button({ children, colorScheme, size, loading = false, as, ...props }: IButtonProps) {
	return (
		<ButtonElement as={as} colorScheme={colorScheme} size={size} {...props}>
			{children}

			{loading && <LoadingComponents colorSchema='light' />}
		</ButtonElement>
	);
}
