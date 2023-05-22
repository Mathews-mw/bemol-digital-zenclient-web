import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuArrow, DropdownMenuItemIndicator, IconButton, Container } from './styles';
import { Bell, Menu } from 'lucide-react';
import { Divider } from '../Divide';
import Image from 'next/image';

import NoNotificationImg from '../../assets/no-notifications.png';

export function NotificationMenu() {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<IconButton aria-label='Customise options'>
					<Bell size={22} />
				</IconButton>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenuContent sideOffset={5}>
					<Container>
						<Image src={NoNotificationImg} width={100} height={100} alt='Sem notificações' />
						<h4>Sem notificações</h4>
					</Container>
				</DropdownMenuContent>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
