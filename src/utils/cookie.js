const setCookie = (accessToken, refreshToken) => {
	const oneDayInSeconds = 24 * 60 * 60; // 1일(24시간)의 초 단위 시간
	const sevenDaysInSeconds = 7 * 24 * 60 * 60; // 7일(7 * 24시간)의 초 단위 시간

	// accessToken 쿠키 설정 (1일 만료)
	document.cookie = `accessToken=${accessToken}; max-age=${oneDayInSeconds};`;

	// refreshToken 쿠키 설정 (7일 만료)
	document.cookie = `refreshToken=${refreshToken}; max-age=${sevenDaysInSeconds};`;
};

const getCookie = targetKey => {
	const cookies = document.cookie.split('; ').map(cookie => {
		const [key, value] = cookie.split('=');
		return {
			[key]: value,
		};
	});

	const cookiesObject = Object.assign({}, ...cookies);

	return cookiesObject[targetKey];
};

const deleteCookie = name => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

// 쿠키에서 토큰의 존재 여부를 확인하는 함수
const checkToken = () => {
	const tokenMatch = document.cookie.match(/(^|; )isToken=([^;]*)/);
	const token = tokenMatch ? tokenMatch[2] : undefined;

	return !!token;
};

export { setCookie, getCookie, deleteCookie, checkToken };
