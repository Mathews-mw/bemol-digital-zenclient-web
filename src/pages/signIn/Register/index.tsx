import { z } from 'zod';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import api from '@/services/api';
import { Card } from '@/components/Card';
import { Title } from '@/components/Title';
import { useQuery } from '@tanstack/react-query';
import { InputText } from '@/components/Form/InputText';
import { Button } from '@/components/Action/Button/buttons';
import { ShowErrorRequest } from '@/utils/ShowErrorRequest';
import { ShowSuccessRequest } from '@/utils/ShowSuccessRequest';

import { ButtonsContainer, Container, Form, Section } from './styles';

interface IResponse {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
}

interface IRegisterProps {
	onChangeTab: () => void;
}

const registerFormSchema = z
	.object({
		name: z.string({ required_error: 'Campo obrigatório' }).min(1, { message: 'Campo obrigatório' }),
		email: z.string().email({ message: 'E-mail inválido' }).min(1, { message: 'Campo obrigatório' }),
		age: z
			.string()
			.min(1, { message: 'Campo obrigatório' })
			.transform((value) => Number(value))
			.refine((value) => value >= 18, { message: 'Não é permitido cadastro de menores de 18 anos' }),
		phone: z.optional(z.string()).transform((value) => value?.replace(/[^0-9]+/g, '')),
		password: z.string().min(1, { message: 'Campo obrigatório' }),
		confirmPassword: z.string().min(1, { message: 'Campo obrigatório' }),
		cep: z
			.string()
			.min(1, { message: 'Campo obrigatório' })
			.transform((value) => value.replace(/[^0-9]+/g, '')),
		rua: z.string().min(1, { message: 'Campo obrigatório' }),
		numero: z.string().min(1, { message: 'Campo obrigatório' }),
		complemento: z.optional(z.string()),
		bairro: z.string().min(1, { message: 'Campo obrigatório' }),
		cidade: z.string().min(1, { message: 'Campo obrigatório' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas precisam ser idênticas',
		path: ['confirmPassword'],
	});

type RegisterFormInputData = z.infer<typeof registerFormSchema>;

export function Register({ onChangeTab }: IRegisterProps) {
	const [actionLoading, setActionLoading] = useState(false);
	const [delayQuerySearch, setDelayQuerySearch] = useState('');

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<RegisterFormInputData>({ resolver: zodResolver(registerFormSchema) });

	const { data: cepResult, isFetching } = useQuery<IResponse>(['search-cep', delayQuerySearch], async () => {
		if (delayQuerySearch) {
			const cepFormatted = delayQuerySearch.replace(/[^0-9]+/g, '');

			const { data } = await axios.get(`https://viacep.com.br/ws/${cepFormatted}/json/`);
			return data;
		}

		return '';
	});

	const querySearchDebounce = useCallback(
		debounce((value) => setDelayQuerySearch(value), 600),
		[]
	);

	function handlerSearch(event: ChangeEvent<HTMLInputElement>) {
		querySearchDebounce(event.target.value);
	}

	async function handleRegisterUser(data: RegisterFormInputData) {
		try {
			setActionLoading(true);

			const { data: result } = await api.post('/users/create', {
				name: data.name,
				email: data.email,
				password: data.password,
				age: data.age,
				phone: data.phone,
				rua: data.rua,
				numero: data.numero,
				bairro: data.bairro,
				complemento: data.complemento,
				cep: data.cep,
				cidade: data.cidade,
				estado: 'Amazonas',
			});

			setActionLoading(false);
			reset();
			location.reload();
			ShowSuccessRequest(result);
		} catch (error) {
			setActionLoading(false);
			ShowErrorRequest(error);
		}
	}

	useEffect(() => {
		if (cepResult) {
			setValue('rua', cepResult.logradouro);
			setValue('bairro', cepResult.bairro);
			setValue('cidade', cepResult.localidade);
		}
	}, [cepResult]);

	return (
		<Container>
			<Card>
				<Title title='Cadastro' />

				<Form onSubmit={handleSubmit(handleRegisterUser)}>
					<Section>
						<InputText mask='' label='Nome' {...register('name')} error={errors.name} />
						<InputText mask='' label='E-mail' {...register('email')} error={errors.email} />
						<InputText
							mask=''
							label='Idade'
							onChangeCapture={(e) => {
								// @ts-ignore
								e.target.value = e.target.value.normalize('NFD').replace(/[^0-9]/g, '');
							}}
							{...register('age')}
							error={errors.age}
						/>
					</Section>

					<Section>
						<InputText mask='(99)99999-9999' label='Telefone' placeholder='(99)99999-9999' {...register('phone')} error={errors.phone} />
						<InputText mask='' label='Senha' passwordView {...register('password')} error={errors.password} />
						<InputText mask='' label='Confirmar senha' passwordView {...register('confirmPassword')} error={errors.confirmPassword} />
					</Section>

					<Section>
						<InputText
							loading={isFetching}
							mask='99999-999'
							maskChar=''
							label='CEP'
							placeholder='69000-000'
							// @ts-ignore
							onChangeCapture={(e) => handlerSearch(e)}
							{...register('cep')}
							error={errors.cep}
						/>
						<InputText mask='' label='Rua' {...register('rua')} error={errors.rua} />
						<InputText mask='' label='Número' {...register('numero')} error={errors.numero} />
					</Section>

					<Section>
						<InputText mask='' label='Complemento' {...register('complemento')} error={errors.complemento} />
						<InputText mask='' label='Bairro' {...register('bairro')} error={errors.bairro} />
						<InputText mask='' label='Cidade' {...register('cidade')} error={errors.cidade} />
					</Section>

					<ButtonsContainer>
						<Button type='submit' disabled={isSubmitting || actionLoading} loading={isSubmitting || actionLoading}>
							Cadastrar
						</Button>
						<Button type='button' colorScheme='gray' disabled={isSubmitting || actionLoading} onClick={onChangeTab}>
							Voltar
						</Button>
					</ButtonsContainer>
				</Form>
			</Card>
		</Container>
	);
}
