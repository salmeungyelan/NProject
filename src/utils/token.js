import Cookies from 'js-cookie';

const decodeJWT = tokenOrType => {
	let token;

	if (tokenOrType.includes('.')) token = tokenOrType;
	else token = Cookies.get(tokenOrType);

	if (!token) return { sub: '', companyName: '' };
	// 토큰의 3번째 부분 (payload)을 분리
	const base64Url = token.split('.')[1];

	// Base64Url 디코딩 (Base64와 다르게 URL에 안전한 문자열 사용)
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

	// 디코딩된 문자열을 UTF-8로 변환
	const jsonPayload = decodeURIComponent(
		atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join(''),
	);

	// JSON 파싱 후 반환
	return JSON.parse(jsonPayload);
};

export default decodeJWT;
