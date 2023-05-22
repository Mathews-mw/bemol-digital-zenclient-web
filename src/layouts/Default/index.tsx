import { ReactNode } from 'react';
import { HeaderContainer, LayoutContainer, MainContainer } from './styles';
import { Header } from '@/components/Header';

interface LayoutProps {
	children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
	return (
		<LayoutContainer>
			<HeaderContainer>
				<Header />
			</HeaderContainer>

			<MainContainer>{children}</MainContainer>
		</LayoutContainer>
	);
}
