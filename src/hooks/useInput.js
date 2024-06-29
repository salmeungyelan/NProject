import { useState } from 'react';

const useInput = () => {
	const [inputData, setInputData] = useState('');

	const handleChange = e => {
		const { name, value } = e.target;

		setInputData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleChangeSearch = e => {
		const { value } = e.target;

		setInputData(value);
	};

	return { inputData, setInputData, handleChange, handleChangeSearch };
};

export default useInput;
