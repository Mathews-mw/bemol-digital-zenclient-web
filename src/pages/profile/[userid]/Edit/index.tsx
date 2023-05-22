import { Title } from '@/components/Title';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { Container, Form, GroupButtons, Section, SectionsContainer, TitleSection } from './styles';
import { Card } from '@/components/Card';
import { Divider } from '@/components/Divide';
import { Button } from '@/components/Action/Button/buttons';
import { InputText } from '@/components/Form/InputText';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ShowSuccessRequest } from '@/utils/ShowSuccessRequest';
import { ShowErrorRequest } from '@/utils/ShowErrorRequest';
import api from '@/services/api';
import { useRouter } from 'next/router';
import { queryClient } from '@/lib/react-query';

interface IEditProps {
	profile: USerProfile | undefined;
	onChangeTab: () => void;
}

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

const editFormSchema = z.object({
	name: z.optional(z.string()),
	age: z.optional(z.coerce.number().refine((value) => value >= 18, { message: 'Não é permitido cadastro de menores de 18 anos' })),
	phone: z.optional(z.string()).transform((value) => value?.replace(/[^0-9]+/g, '')),
	cep: z.optional(z.string().transform((value) => value.replace(/[^0-9]+/g, ''))),
	rua: z.optional(z.string()),
	numero: z.optional(z.string()),
	complemento: z.optional(z.string()),
	bairro: z.optional(z.string()),
	cidade: z.optional(z.string()),
});

type EditFormInputData = z.infer<typeof editFormSchema>;

export function Edit({ onChangeTab, profile }: IEditProps) {
	const router = useRouter();

	const [actionLoading, setActionLoading] = useState(false);
	const [delayQuerySearch, setDelayQuerySearch] = useState('');

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<EditFormInputData>({ resolver: zodResolver(editFormSchema) });

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

	async function handleEditUser(data: EditFormInputData) {
		try {
			setActionLoading(true);

			const { data: result } = await api.put(`/users/edit/${profile?.id}`, {
				name: data.name,
				age: data.age,
				phone: data.phone,
				rua: data.rua,
				numero: data.numero,
				bairro: data.bairro,
				complemento: data.complemento,
				cep: data.cep,
				cidade: data.cidade,
			});

			reset();
			queryClient.invalidateQueries(['user', profile?.id]);
			setActionLoading(false);
			ShowSuccessRequest(result);
			onChangeTab();
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

	useEffect(() => {
		if (profile) {
			setValue('name', profile.name);
			setValue('age', profile.age);
			setValue('phone', profile.phone);
			setValue('cep', profile.address.CEP);
			setValue('rua', profile.address.rua);
			setValue('numero', profile.address.numero);
			setValue('complemento', profile.address.complemento);
			setValue('bairro', profile.address.bairro);
			setValue('cidade', profile.address.cidade);
		}
	}, [profile]);

	return (
		<Container>
			<Card>
				<Title title='Editar seu perfil' />

				<Form id='edit-user-form' onSubmit={handleSubmit(handleEditUser)}>
					<SectionsContainer>
						<TitleSection>Informações da conta</TitleSection>

						<InputText mask='' label='Nome' {...register('name')} error={errors.name} />
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
						<InputText mask='(99)99999-9999' defaultValue={profile?.phone} label='Telefone' {...register('phone')} error={errors.phone} />
					</SectionsContainer>

					<SectionsContainer>
						<TitleSection>Informações de endereço</TitleSection>

						<Section>
							<InputText
								loading={isFetching}
								mask='99999-999'
								maskChar=''
								label='CEP'
								placeholder='69000-000'
								defaultValue={profile?.address.CEP}
								// @ts-ignore
								onChangeCapture={(e) => handlerSearch(e)}
								{...register('cep')}
								error={errors.cep}
							/>
							<InputText mask='' label='Rua' {...register('rua')} error={errors.rua} />
							<InputText mask='' label='Número' {...register('numero')} error={errors.numero} />
							<InputText mask='' label='Complemento' {...register('complemento')} error={errors.complemento} />
							<InputText mask='' label='Bairro' {...register('bairro')} error={errors.bairro} />
							<InputText mask='' label='Cidade' {...register('cidade')} error={errors.cidade} />
						</Section>
					</SectionsContainer>
				</Form>
				<Divider />

				<GroupButtons>
					<Button type='button' colorScheme='gray' onClick={onChangeTab}>
						Cancelar
					</Button>
					<Button type='submit' form='edit-user-form'>
						Salvar
					</Button>
				</GroupButtons>
			</Card>
		</Container>
	);
}
