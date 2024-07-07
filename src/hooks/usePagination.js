import { useEffect, useMemo, useState } from 'react';

import usePathname from './usePathname';

const usePagination = (totalItems, itemsPerPage, displayPageCount) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [total, setTotal] = useState(0);

	const { path } = usePathname();

	useEffect(() => {
		setCurrentPage(1);
		setTotal(totalItems);
	}, [path]);

	const pages = useMemo(() => {
		const totalPages = Math.ceil(totalItems / itemsPerPage);
		const currentGroup = Math.ceil(currentPage / displayPageCount);
		const startPage = (currentGroup - 1) * displayPageCount + 1;
		const endPage = Math.min(startPage + displayPageCount - 1, totalPages);

		return { totalPages, currentGroup, startPage, endPage };
	}, [totalItems, itemsPerPage, displayPageCount]);

	const onClickNextGroup = () => {
		const nextPage = pages.endPage + 1;
		if (nextPage <= pages.totalPages) setCurrentPage(nextPage);
	};

	const onClickPrevGroup = () => {
		const prevPage = pages.startPage - displayPageCount;
		if (prevPage >= 1) setCurrentPage(prevPage);
		else setCurrentPage(1);
	};

	const onClickNext = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const onClickPrev = () => {
		if (currentPage < pages.totalPages) setCurrentPage(currentPage + 1);
	};

	return {
		currentPage,
		setCurrentPage,
		total,
		setTotal,
		pages,
		onClickNextGroup,
		onClickPrevGroup,
		onClickNext,
		onClickPrev,
	};
};

export default usePagination;
