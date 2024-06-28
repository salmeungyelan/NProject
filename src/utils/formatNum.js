import VALIDATE from './regex';

const formatPhoneNum = number => {
	const cleaned = ('' + number).replace(/\D/g, '');
	const match = cleaned.match(VALIDATE.contact);
	if (match) {
		return `${match[1]}-${match[2]}-${match[3]}`;
	}
	return number;
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
