import { z } from 'zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card } from '@/components/Card';
import { Divider } from '@/components/Divide';
import { AuthContext } from '@/context/AuthContext';
import { InputText } from '@/components/Form/InputText';
import { Button } from '@/components/Action/Button/buttons';
import { LoadingScreen } from '@/components/Loarders/LoadingScreen';

import { Container, FooterContainer, Form, Logo, LogoContainer, RegisterButton } from './styles';

interface ILoginProps {
	onChangeTab: () => void;
}

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
					<Logo colorType='secondaty'>zen</Logo>
					<Logo colorType='prymary'>client</Logo>
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
