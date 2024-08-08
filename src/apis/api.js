import axios from 'axios';
import Cookies from 'js-cookie';

import { setCookie } from 'utils/cookie';
import { useNavigate } from 'react-router-dom';
import LINK from 'constants/link';

// post메서드로 통신할 때 기본값 설정
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
// const apiBaseUrl = process.env.REACT_APP_DEV_API_BASE_URL;
// const apiBaseUrl = process.env.REACT_APP_PRO_API_BASE_URL;

export const api = axios.create({
	baseURL: apiBaseUrl,
	// timeout: 10000,
	withCredentials: true,
});

api.interceptors.request.use(
	config => {
		const accessToken = Cookies.get('accessToken');

		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		// 데이터 형식에 따라 Content-Type 설정
		if (config.data instanceof FormData) {
			config.headers['Content-Type'] = 'multipart/form-data';
		} else if (
			typeof config.data === 'object' &&
			!(config.data instanceof FormData)
		) {
			config.headers['Content-Type'] = 'application/json';
		}

		return config;
	},

	error => {
		return Promise.reject(error);
	},
);

api.interceptors.response.use(
	res => {
		return res.data;
	},

	async axiosError => {
		const { response, config } = axiosError;
		const refreshToken = Cookies.get('refreshToken');
		const navigate = useNavigate();
		const redirectToHome = () => {
			const queryParams = new URLSearchParams(location.search);
			const redirectUrl = queryParams.get('redirection') || LINK.HOME;
			navigate(redirectUrl, { replace: true });
		};

		if (response.status === 410 && refreshToken) {
			try {
				const response = await axios.post(`${apiBaseUrl}/auth/renew-token`, {
					refreshToken,
				});

				Cookies.set('accessToken', response.data.data.accessToken);
				setCookie(response.data.data.accessToken);
				config.headers.Authorization = `Bearer ${response.data.data.accessToken}`;

				return api(config); // 기존 요청을 재요청
			} catch (refreshError) {
				redirectToHome();
				return Promise.reject(refreshError);
			}
		} else if (!refreshToken) redirectToHome();

		return Promise.reject(axiosError);
	},
);

export const getApi = async (path, params) => {
	return await api.get(path, { params });
};

export const postApi = async (path, data) => {
	return await api.post(path, data);
};

export const deleteApi = async (path, params) => {
	return await api.delete(path, params);
};

export const putApi = async (path, data) => {
	return await api.put(path, data);
};

export const patchApi = async (path, data) => {
	return await api.patch(path, data);
};
