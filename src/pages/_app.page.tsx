import 'react-toastify/dist/ReactToastify.css';

import { NextPage } from 'next';
import ReactModal from 'react-modal';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ReactElement, ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { globalStyles } from '../styles/global';
import { queryClient } from '@/lib/react-query';
import { AuthContextProvider } from '@/context/AuthContext';

ReactModal.setAppElement('#root');

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

globalStyles();
export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<AuthContextProvider>{getLayout(<Component {...pageProps} />)}</AuthContextProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>

			<ToastContainer />
		</div>
	);
}
