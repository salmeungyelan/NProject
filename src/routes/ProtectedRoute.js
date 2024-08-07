import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import Layout from 'components/@common/Layout';
import Loading from 'components/@common/Loading/Loading';
import { useGlobalState } from 'contexts/GlobalContext';
import { setCookie } from 'utils/cookie';
import decodeJWT from 'utils/token';

const ProtectedRoute = () => {
	const location = useLocation();
	const [authenticated, setAuthenticated] = useState(null);

	const redirectionPath = location?.pathname ?? null;
	const { setIsLoading } = useGlobalState();

	useEffect(() => {
		const checkAuth = async () => {
			setIsLoading(true);
			const authStatus = await isAuthenticated();
			setAuthenticated(authStatus);
			setIsLoading(false);
		};

		checkAuth();
	}, [location]);

	// 인증 상태를 확인 중일 때 로딩 상태 표시
	if (authenticated === null) return <Loading />;
	if (!authenticated)
		return (
			<Navigate
				to={redirectionPath ? `/login?redirection=${redirectionPath}` : `/`}
				replace
			/>
		);

	return <Layout />;
};

const isAuthenticated = async () => {
	const tokenExpired = () => {
		const { exp } = decodeJWT('refreshToken') || {};
		return !exp || new Date(exp * 1000) < new Date();
	};

	const accessToken = Cookies.get('accessToken');
	let refreshToken = Cookies.get('refreshToken');

	if (tokenExpired()) refreshToken = null;
	if (!accessToken && !refreshToken) return false;

	if (!accessToken) {
		try {
			const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
			const response = await axios.post(`${apiBaseUrl}/auth/renew-token`, {
				refreshToken,
			});
			Cookies.set('accessToken', response.data.data.accessToken);
			setCookie(response.data.data.accessToken);
		} catch (error) {
			return false;
		}
	}

	// accessToken && refreshToken
	return true;
};

export default ProtectedRoute;
