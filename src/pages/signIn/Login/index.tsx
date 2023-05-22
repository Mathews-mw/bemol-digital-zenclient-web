import { z } from 'zod';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Baloo_2 } from 'next/font/google';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card } from '@/components/Card';
import { Divider } from '@/components/Divide';
import { InputText } from '@/components/Form/InputText';
import { Button } from '@/components/Action/Button/buttons';

import { Container, FooterContainer, Form, Logo, LogoContainer, RegisterButton } from './styles';
import { AuthContext } from '@/context/AuthContext';
import { LoadingScreen } from '@/components/Loarders/LoadingScreen';

interface ILoginProps {
	onChangeTab: () => void;
}

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500', '600', '700'] });

const loginFormSchema = z.object({
	login: z.string().min(1, { message: 'Campo obrigatório!' }).email({ message: 'E-mail inválido' }),
	senha: z.string().min(1, { message: 'Campo obrigatório!' }),
});

type loginFormInputData = z.infer<typeof loginFormSchema>;

export function Login({ onChangeTab }: ILoginProps) {
	const { signIn, loading } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<loginFormInputData>({ resolver: zodResolver(loginFormSchema) });

	async function handleLogin(data: loginFormInputData) {
		await signIn({ email: data.login, password: data.senha });
	}

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<Container>
			<Card>
				<LogoContainer>
					<Logo className={baloo.className} colorType='secondaty'>
						zen
					</Logo>
					<Logo className={baloo.className} colorType='prymary'>
						client
					</Logo>
				</LogoContainer>

				<Divider />

				<Form onSubmit={handleSubmit(handleLogin)}>
					<InputText mask='' label='Login' {...register('login')} error={errors.login} />
					<InputText mask='' label='Senha' passwordView {...register('senha')} />

					<div style={{ display: 'flex', justifyContent: 'right' }}>
						<Button type='submit' colorScheme='tomato' disabled={isSubmitting || loading}>
							Entrar
						</Button>
					</div>
				</Form>

				<Divider />

				<FooterContainer>
					<span>Ainda não tem acesso?</span>
					<RegisterButton onClick={onChangeTab}>Cadastre-se</RegisterButton>
				</FooterContainer>
			</Card>
		</Container>
	);
}
