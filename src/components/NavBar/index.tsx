import { useContext, useState } from 'react';

import { NavLink } from './NavLink';

import { Container } from './styles';
import { Home, User } from 'lucide-react';
import { AuthContext } from '@/context/AuthContext';

export function NavBar() {
	const { user } = useContext(AuthContext);
	const [urlPath, setUrlPath] = useState('');

	function handleSetUrlPath() {
		setUrlPath('');
	}

	return (
		<Container>
			<NavLink href='/home' getUrlPath={() => handleSetUrlPath()}>
				<Home size={22} />
			</NavLink>

			<NavLink href={`/profile/${user?.id}`} getUrlPath={() => handleSetUrlPath()}>
				<User size={22} />
			</NavLink>
		</Container>
	);
}
