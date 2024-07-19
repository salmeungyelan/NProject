import { useEffect, useMemo, useState } from 'react';

import usePathname from './usePathname';

const useFilter = () => {
	const { path } = usePathname();
	const filterName = useMemo(() => {
		return path.toUpperCase().replace(/-/g, '_');
	}, [path]);

	const [sort, setSort] = useState(`${filterName}_FILTER_01`);

	useEffect(() => {
		setSort(`${filterName}_FILTER_01`);
	}, [path]);

	const handelSelectFilter = e => {
		const value = e.currentTarget.getAttribute('data-value');

		setSort(value);
	};

	return { sort, filterName, handelSelectFilter };
};

export default useFilter;
