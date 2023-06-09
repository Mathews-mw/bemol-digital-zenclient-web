import Modal from 'react-modal';
import { useContext, useState } from 'react';

import { theme } from '@/styles';
import { NavBar } from '../NavBar';
import { UserAvatar } from '../UserAvatar';
import { Button } from '../Action/Button/buttons';
import { AuthContext } from '@/context/AuthContext';
import { NotificationMenu } from '../NotificationMenu';

import { LogOut } from 'lucide-react';
import { Container, Logo, LogoutButton, ManagementContainer, NavContainer, SignoutModalContainer, UserInfosContainer, VDivider } from './styles';

const customStyles = {
	content: {
		margin: 'auto',
		maxHeight: 'max-content',
		width: 'max-content',
		alignSelf: 'center',
		borderRadius: 8,
		boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 30px',
		padding: 0,
		background: `${theme.colors.surface50}`,
		border: 'none',
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 1050,
	},
};

export function Header() {
	const { signOut } = useContext(AuthContext);

	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handlerSingOut() {
		signOut();
	}

	return (
		<>
			<Container>
				<Logo>zenclient</Logo>

				<NavContainer>
					<NavBar />

					<VDivider />
					<ManagementContainer>
						<NotificationMenu />

						<LogoutButton onClick={() => setModalIsOpen(true)}>
							<LogOut size={22} />
						</LogoutButton>
					</ManagementContainer>
					<VDivider />

					<UserInfosContainer>
						<UserAvatar name='Mathews Araújo' />
						<span className='user-name'>Bem-vindo, Mathews Araújo</span>
					</UserInfosContainer>
				</NavContainer>
			</Container>

			<Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
				<SignoutModalContainer>
					<h3>Deseja mesmo sair?</h3>

					<div className='btn-group'>
						<Button size='sm' colorScheme='gray' onClick={() => setModalIsOpen(false)}>
							Não
						</Button>
						<Button size='sm' colorScheme='gray' onClick={() => handlerSingOut()}>
							Sim
						</Button>
					</div>
				</SignoutModalContainer>
			</Modal>
		</>
	);
}
