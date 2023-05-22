import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactElement, useContext, useState } from 'react';

import { Edit } from './Edit';
import api from '@/services/api';
import { Display } from './Display';
import DefaultLayout from '@/layouts/Default';
import { AuthContext } from '@/context/AuthContext';
import { LoadingScreen } from '@/components/Loarders/LoadingScreen';

import { Container } from './styles';

type CardType = 'displayCard' | 'editCard';

export default function Profile() {
	const { user } = useContext(AuthContext);

	const [selectedTab, setSelectedTab] = useState<CardType>('displayCard');

	const { data: profile, isFetching } = useQuery<USerProfile>(['user', user?.id], async () => {
		const { data: result } = await api.get(`users/${user?.id}/find-id`);

		return result;
	});

	if (isFetching) {
		return <LoadingScreen colorSchema='blue' />;
	}

	return (
		<Container>
			<AnimatePresence mode='wait'>
				<motion.div
					key={selectedTab}
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.1 }}
				>
					{selectedTab === 'displayCard' ? (
						<Display profile={profile} onChangeTab={() => setSelectedTab('editCard')} />
					) : (
						<Edit profile={profile} onChangeTab={() => setSelectedTab('displayCard')} />
					)}
				</motion.div>
			</AnimatePresence>
		</Container>
	);
}

Profile.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
