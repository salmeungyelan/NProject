const VALIDATE = {
	email:
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
	id: /^[a-z0-9]{4,20}$/g,
	password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/,
	contact: /(\d{2,3})(\d{3,4})(\d{4})/,
	business: /(\d{3})(\d{2})(\d{5})/,
};

export default VALIDATE;
