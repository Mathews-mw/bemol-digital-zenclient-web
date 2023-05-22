import axios from 'axios';

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

export async function searchCep(cep: string): Promise<IResponse> {
	try {
		const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
