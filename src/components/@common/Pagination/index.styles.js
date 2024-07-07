import { styled } from 'styled-components';
import { flexCenter } from 'styles/common';

export const PaginationBox = styled.div`
	${flexCenter}
	gap: 20px;
`;

export const NextPrevBox = styled(PaginationBox)`
	gap: 8px;
`;

export const PageNumBox = styled(NextPrevBox)``;

export const Number = styled.div`
	${flexCenter}
	width: 25px;
	height: 25px;
	border-radius: 4px;
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.m};

	color: ${({ theme, $currentPage, $plus }) =>
		$currentPage === $plus
			? theme.PALETTE.white[100]
			: theme.PALETTE.gray[200]};

	border: 1px solid
		${({ theme, $currentPage, $plus }) =>
			$currentPage === $plus
				? theme.PALETTE.orange[300]
				: theme.PALETTE.gray[0]};

	background-color: ${({ theme, $currentPage, $plus }) =>
		$currentPage === $plus
			? theme.PALETTE.orange[300]
			: theme.PALETTE.white[100]};
`;

export const HangulBtn = styled.div`
	${flexCenter}
	width: 48px;
	height: 25px;
	cursor: pointer;
	border-radius: 4px;
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

	&:hover {
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		border: 1px solid ${({ theme }) => theme.PALETTE.orange[300]};
	}
`;

export const ImgButton = styled(HangulBtn)`
	width: 25px;
	height: 25px;

	& img {
		width: 10px;
		height: 12px;
	}
`;
