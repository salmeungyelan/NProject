import Cookies from 'js-cookie';
import decodeJWT from './token';

const setCookie = (accessToken, refreshToken) => {
	const { exp: access } = decodeJWT(accessToken);
	let refresh = null;
	if (refreshToken) ({ exp: refresh } = decodeJWT(refreshToken));

	const setExpires = exp => new Date(exp * 1000 + 9 * 60 * 60 * 1000);

	Cookies.set('accessToken', accessToken, { expires: setExpires(access) });
	if (refreshToken)
		Cookies.set('refreshToken', refreshToken, { expires: setExpires(refresh) });
};

export { setCookie };
