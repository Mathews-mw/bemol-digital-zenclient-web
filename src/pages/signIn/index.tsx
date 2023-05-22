import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Login } from './Login';
import { Container } from './styles';
import { Register } from './Register';

type CardType = 'loginCard' | 'registerCard';

export default function SignIn() {
	const [selectedTab, setSelectedTab] = useState<CardType>('loginCard');

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
					{selectedTab === 'loginCard' ? (
						<Login onChangeTab={() => setSelectedTab('registerCard')} />
					) : (
						<Register onChangeTab={() => setSelectedTab('loginCard')} />
					)}
				</motion.div>
			</AnimatePresence>
		</Container>
	);
}
