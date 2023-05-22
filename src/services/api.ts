import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();
const storegedToken = cookies[`${process.env.NEXT_PUBLIC_TOKEN_KEY}`];

const api = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
	timeout: 30000,
});

api.interceptors.request.use(async (config) => {
	if (storegedToken) {
		config.headers.Authorization = `Bearer ${storegedToken}`;
	}

	return config;
});

export default api;
