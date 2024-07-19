const VALIDATE = {
	email:
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
	id: /^[가-힣a-zA-Z0-9]{2,12}$/g,
	password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/,

	defaultContact: /(\d{3})(\d{3,4})(\d{4})/,
	seoulContact: /(\d{2})(\d{3,4})(\d{4})/,
	internatContact: /(\d{3})(\d{3,4})(\d{4})/,
	etcContact: /(\d{3,4})(\d{3,4})(\d{4})/,

	business: /(\d{3})(\d{2})(\d{5})/,
};

export default VALIDATE;
