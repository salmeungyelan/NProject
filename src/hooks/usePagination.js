import { useCallback, useEffect, useState } from 'react';

import usePathname from './usePathname';

const usePagination = (totalItems, itemsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [total, setTotal] = useState(0);

	const { path } = usePathname();

	useEffect(() => {
		setCurrentPage(1);
		setTotal(totalItems);
	}, [path]);

	const displayPageCount = 5;
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const currentGroup = Math.ceil(currentPage / displayPageCount);
	const startPage = (currentGroup - 1) * displayPageCount + 1;
	const endPage = Math.min(startPage + displayPageCount - 1, totalPages);

	const onClickPrev = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const onClickPrevGroup = () => {
		const prevPage = startPage - displayPageCount;
		if (prevPage >= 1) setCurrentPage(prevPage);
		else setCurrentPage(1);
	};

	const onClickNext = () => {
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	const onClickNextGroup = () => {
		const nextPage = endPage + 1;
		if (nextPage <= totalPages) setCurrentPage(nextPage);
		else setCurrentPage(totalPages);
	};

	return {
		currentPage,
		setCurrentPage,
		total,
		setTotal,
		startPage,
		endPage,
		totalPages,
		onClickNextGroup,
		onClickPrevGroup,
		onClickNext,
		onClickPrev,
	};
};

export default usePagination;

// const onClickPrev = useCallback(() => {
// 	if (currentPage > 1) setCurrentPage(currentPage - 1);
// }, [currentPage]);

// const onClickPrevGroup = useCallback(() => {
// 	const prevPage = startPage - displayPageCount;
// 	if (prevPage >= 1) setCurrentPage(prevPage);
// 	else setCurrentPage(1);
// }, [startPage]);

// const onClickNext = useCallback(() => {
// 	if (currentPage < totalPages) setCurrentPage(currentPage + 1);
// }, [currentPage, totalPages]);

// const onClickNextGroup = useCallback(() => {
// 	const nextPage = endPage + 1;
// 	setCurrentPage(nextPage <= totalPages ? nextPage : totalPages);
// }, [endPage, totalPages]);
