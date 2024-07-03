import { useState } from 'react';

import usePathname from './usePathname';

const useFilter = () => {
	const { path } = usePathname();
	const filterName = path.toUpperCase();

	const [sort, setSort] = useState(`${filterName}_FILTER_01`);

	const handelSelectFilter = e => {
		const value = e.currentTarget.getAttribute('data-value');

		setSort(value);
	};

	return { sort, handelSelectFilter };
};

export default useFilter;
