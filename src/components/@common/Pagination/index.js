import usePagination from 'hooks/usePagination';

import * as S from './index.styles';

function Pagination(props) {
	const { totalItems, itemsPerPage, currentPage, onPageChange } = props;

	const {
		startPage,
		endPage,
		totalPages,
		totalGroup,
		currentGroup,
		onClickPrev,
		onClickPrevGroup,
		onClickNext,
		onClickNextGroup,
	} = usePagination(totalItems, itemsPerPage);

	return (
		<S.PaginationBox>
			<S.NextPrevBox>
				<S.LeftButton
					onClick={() => {
						onClickPrevGroup();
						onPageChange(startPage - 1);
					}}
					disabled={currentGroup === 1}
				/>
				<S.HangulBtn
					onClick={() => {
						onClickPrev();
						onPageChange(currentPage - 1);
					}}
					disabled={currentPage <= 1}
				>
					이전
				</S.HangulBtn>
			</S.NextPrevBox>

			<S.PageNumBox>
				{Array.from({ length: endPage - startPage + 1 }, (_, index) => (
					<S.Number
						key={startPage + index}
						onClick={() => onPageChange(startPage + index)}
						$selected={currentPage === startPage + index}
					>
						{startPage + index}
					</S.Number>
				))}
			</S.PageNumBox>

			<S.NextPrevBox>
				<S.HangulBtn
					onClick={() => {
						onClickNext();
						onPageChange(currentPage + 1);
					}}
					disabled={currentPage === totalPages}
				>
					다음
				</S.HangulBtn>
				<S.RightButton
					onClick={() => {
						onClickNextGroup();
						onPageChange(endPage + 1);
					}}
					disabled={currentGroup === totalGroup}
				/>
			</S.NextPrevBox>
		</S.PaginationBox>
	);
}

export default Pagination;
