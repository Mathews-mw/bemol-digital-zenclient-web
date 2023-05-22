import api from '@/services/api';
import { ShowErrorRequest } from '@/utils/ShowErrorRequest';
import Router from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface SignInCredentials {
	email: string;
	password: string;
}

interface User {
	id: string;
	email: string;
	role: string;
}

interface ISessionResponse {
	token: string;
	user: User;
}

type AuthContextData = {
	signIn: (credentials: SignInCredentials) => Promise<void>;
	signOut: () => void;
	user?: User;
	isAuthenticated: boolean;
	loading: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut(broadcast: boolean = true) {
	destroyCookie(undefined, `${process.env.NEXT_PUBLIC_TOKEN_KEY}`);

	if (broadcast) {
		authChannel.postMessage('signOut');
	}

	Router.push('/');
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<User>();

	const isAuthenticated = !!user;

	useEffect(() => {
		authChannel = new BroadcastChannel('auth');

		authChannel.onmessage = (message) => {
			switch (message.data) {
				case 'signOut':
					signOut(false);
					break;
				default:
					break;
			}
		};
	}, []);

	useEffect(() => {
		const cookies = parseCookies();
		const storegedToken = cookies[`${process.env.NEXT_PUBLIC_TOKEN_KEY}`];

		if (storegedToken) {
			api
				.get(`/users/profile`)
				.then((response) => {
					setUser(response.data);
				})
				.catch(() => {
					signOut();
				});

			Router.push('/home');
		}
	}, []);

	async function signIn({ email, password }: SignInCredentials) {
		try {
			setLoading(true);
			const { data } = await api.post<ISessionResponse>('/authenticate', { email, password });

			setCookie(undefined, `${process.env.NEXT_PUBLIC_TOKEN_KEY}`, data.token, {
				maxAge: 60 * 60 * 24 * 30, // 30 dias
				path: '/',
			});

			setUser(data.user);

			api.defaults.headers['Authorization'] = `Bearer ${data.token}`;

			setLoading(false);
			Router.push('/home');
		} catch (error) {
			setLoading(false);
			console.log(error);
			ShowErrorRequest(error);
		}
	}

	return <AuthContext.Provider value={{ signIn, signOut, user, isAuthenticated, loading }}>{children}</AuthContext.Provider>;
}
