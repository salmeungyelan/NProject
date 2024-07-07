import usePagination from 'hooks/usePagination';

import * as S from './index.styles';

function Pagination(props) {
	const { totalItems, itemsPerPage, currentPage, onPageChange } = props;

	const {
		pages,
		onClickPrev,
		onClickPrevGroup,
		onClickNext,
		onClickNextGroup,
	} = usePagination(totalItems, itemsPerPage, 5);

	const { endPage, startPage } = pages;

	return (
		<S.PaginationBox>
			<S.NextPrevBox>
				<S.ImgButton onClick={onClickPrevGroup}>
					<img src="/assets/icons/left-arrow.svg" alt="Previous" />
				</S.ImgButton>
				<S.HangulBtn onClick={onClickPrev}>이전</S.HangulBtn>
			</S.NextPrevBox>

			<S.PageNumBox>
				{Array.from({ length: endPage - startPage + 1 }, (_, index) => (
					<S.Number
						key={startPage + index}
						onClick={() => onPageChange(startPage + index)}
						$currentPage={currentPage}
						$plus={startPage + index}
					>
						{startPage + index}
					</S.Number>
				))}
			</S.PageNumBox>

			<S.NextPrevBox>
				<S.HangulBtn onClick={onClickNext}>다음</S.HangulBtn>
				<S.ImgButton onClick={onClickNextGroup}>
					<img src="/assets/icons/right-arrow.svg" alt="Next" />
				</S.ImgButton>
			</S.NextPrevBox>
		</S.PaginationBox>
	);
}

export default Pagination;
