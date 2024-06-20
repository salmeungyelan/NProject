import axios from 'axios';

// post메서드로 통신할 때 기본값 설정
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
// const apiBaseUrl = process.env.REACT_APP_DEV_API_BASE_URL;
// const apiBaseUrl = process.env.REACT_APP_PRO_API_BASE_URL;

export const api = axios.create({
	baseURL: apiBaseUrl,
	timeout: 5000,
	withCredentials: true,
});

api.interceptors.request.use(
	req => {
		if (req.data instanceof FormData) {
			req.headers['Content-Type'] = 'multipart/form-data';
		} else if (
			typeof req.data === 'object' &&
			!(req.data instanceof FormData)
		) {
			req.data = JSON.stringify(req.data);
			req.headers['Content-Type'] = 'application/json';
		}
		return req;
	},
	err => {
		throw err;
	},
);

api.interceptors.response.use(
	res => {
		return res.data;
	},
	err => {
		throw err;
	},
);

export const getApi = async (path, params) => {
	return await api.get(path, { params });
};

export const postApi = async (path, data) => {
	return await api.post(path, JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const deleteApi = async (path, params) => {
	return await api.delete(path, params);
};

export const putApi = async (path, data) => {
	return await api.put(path, JSON.stringify(data));
};

export const patchApi = async (path, data) => {
	return await api.patch(path, JSON.stringify(data));
};
