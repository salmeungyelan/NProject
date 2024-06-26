import { useState } from 'react';

import usePathname from './usePathname';

const useFilter = () => {
	const path = usePathname();
	const filterName = path === 'notice' ? 'NOTICE' : 'GUIDE';

	const [sort, setSort] = useState({
		sortBy: `${filterName}_FILTER_01`,
	});

	const handelSelectFilter = e => {
		const value = e.currentTarget.getAttribute('data-value');

		setSort({
			sortBy: value,
		});
	};

	return { sort, handelSelectFilter };
};

export default useFilter;
