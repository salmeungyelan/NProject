import { useState } from 'react';

const useSearch = () => {
	const [search, setSearch] = useState('');

	const handleChange = e => {
		const { value } = e.target;

		setSearch(value);
	};

	// 검색 초기화
	const handleClickReset = () => {
		setSearch('');
	};

	return { search, handleChange, handleClickReset };
};

export default useSearch;
