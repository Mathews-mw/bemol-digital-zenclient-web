import { Card } from '@/components/Card';
import DefaultLayout from '@/layouts/Default';
import { ReactElement } from 'react';
import { Container, CoverContainer, HeaderContainer } from './styles';

import coverImage from '../../assets/cover-home.png';
import Image from 'next/image';

export default function Home() {
	return (
		<Container>
			<Card>
				<CoverContainer>
					<HeaderContainer>
						<h2>Bem-vindo</h2>
					</HeaderContainer>
					<Image src={coverImage} alt='Cover Home' />
				</CoverContainer>
			</Card>
		</Container>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
