import { Card } from '@/components/Card';
import { Title } from '@/components/Title';
import { Divider } from '@/components/Divide';
import { Button } from '@/components/Action/Button/buttons';

import { Container, InforsContainer, Section, SectionsContainer, TitleSection } from './styles';

interface IDisplayProps {
	profile: USerProfile | undefined;
	onChangeTab: () => void;
}

export function Display({ onChangeTab, profile }: IDisplayProps) {
	return (
		<Container>
			<Card>
				<Title title='Informações da sua conta' />

				<InforsContainer>
					<SectionsContainer>
						<TitleSection>Informações da conta</TitleSection>

						<Section>
							<span>Nome</span>
							<p>{profile?.name}</p>
						</Section>

						<Section>
							<span>E-mail</span>
							<p>{profile?.email}</p>
						</Section>

						<Section>
							<span>Idade</span>
							<p>{profile?.age}</p>
						</Section>

						<Section>
							<span>Telefone</span>
							<p>{profile?.phone}</p>
						</Section>
					</SectionsContainer>

					<SectionsContainer>
						<TitleSection>Informações de endereço</TitleSection>

						<Section>
							<span>Rua</span>
							<p>{profile?.address.rua}</p>
						</Section>

						<Section>
							<span>Número</span>
							<p>{profile?.address.numero}</p>
						</Section>

						<Section>
							<span>Bairro</span>
							<p>{profile?.address.bairro}</p>
						</Section>

						<Section>
							<span>Complemento</span>
							<p>{profile?.address.complemento}</p>
						</Section>

						<Section>
							<span>CEP</span>
							<p>{profile?.address.CEP}</p>
						</Section>

						<Section>
							<span>Cidade</span>
							<p>{profile?.address.cidade}</p>
						</Section>

						<Section>
							<span>Estado</span>
							<p>{profile?.address.estado}</p>
						</Section>
					</SectionsContainer>
				</InforsContainer>

				<Divider />

				<div style={{ display: 'flex', justifyContent: 'right' }}>
					<Button onClick={onChangeTab}>Editar</Button>
				</div>
			</Card>
		</Container>
	);
}
