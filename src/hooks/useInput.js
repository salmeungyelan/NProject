import { useState } from 'react';

const useInput = () => {
	const [inputData, setInputData] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;

		setInputData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	return { inputData, setInputData, handleChange };
};

export default useInput;
