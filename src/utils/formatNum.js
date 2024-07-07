import VALIDATE from './regex';

const formatPhoneNum = number => {
	if (!number) return ''; // number가 null 또는 undefined인 경우 빈 문자열 반환

	const cleaned = ('' + number).replace(/\D/g, '');

	if (cleaned.startsWith('02')) {
		// 서울(02) 지역번호인 경우
		return cleaned.replace(VALIDATE.seoulContact, '$1-$2-$3');
	} else if (
		cleaned.startsWith('050') ||
		cleaned.startsWith('070') ||
		cleaned.startsWith('080')
	) {
		// 인터넷 전화번호인 경우
		return cleaned.replace(VALIDATE.internatContact, '$1-$2-$3');
	} else if (
		cleaned.startsWith('010') ||
		cleaned.startsWith('011') ||
		cleaned.startsWith('016') ||
		cleaned.startsWith('017') ||
		cleaned.startsWith('018') ||
		cleaned.startsWith('019')
	) {
		// 휴대폰 번호인 경우
		return cleaned.replace(VALIDATE.defaultContact, '$1-$2-$3');
	} else {
		// 나머지 일반 전화번호인 경우
		return cleaned.replace(VALIDATE.etcContact, '$1-$2-$3');
	}
};

const formatBusinessNum = number => {
	const cleaned = ('' + number).replace(/\D/g, '');
	const match = cleaned.match(VALIDATE.business);
	if (match) {
		return `${match[1]}-${match[2]}-${match[3]}`;
	}
	return number;
};

export { formatPhoneNum, formatBusinessNum };
