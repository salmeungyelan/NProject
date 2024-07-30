import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import usePathname from './usePathname';

const useFilter = () => {
	const { path } = usePathname();
	const filterName = useMemo(() => {
		return path.toUpperCase().replace(/-/g, '_');
	}, [path]);

	const getQueryParams = () => {
		const params = new URLSearchParams(location.search);
		return { sort: params.get('sort') || '' };
	};
	const params = getQueryParams();

	const [sort, setSort] = useState(params.sort || `${filterName}_FILTER_01`);

	useEffect(() => {
		setSort(`${filterName}_FILTER_01`);
	}, [path]);

	const navigate = useNavigate();

	const handelSelectFilter = e => {
		const value = e.currentTarget.getAttribute('data-value');

		const params = new URLSearchParams(location.search);
		params.set('sort', value);
		navigate(`?${params.toString()}`, { replace: true });

		setSort(value);
	};

	return { sort, setSort, filterName, handelSelectFilter };
};

export default useFilter;
