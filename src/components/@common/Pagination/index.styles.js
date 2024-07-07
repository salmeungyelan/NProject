import { css, styled } from 'styled-components';
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

	color: ${({ theme, $selected }) =>
		$selected ? theme.PALETTE.white[100] : theme.PALETTE.gray[200]};

	border: 1px solid
		${({ theme, $selected }) =>
			$selected ? theme.PALETTE.orange[300] : theme.PALETTE.gray[0]};

	background-color: ${({ theme, $selected }) =>
		$selected ? theme.PALETTE.orange[300] : theme.PALETTE.white[100]};

	&:hover {
		color: ${({ theme, $selected }) => !$selected && theme.PALETTE.orange[100]};
		border: 1px solid
			${({ theme, $selected }) => !$selected && theme.PALETTE.orange[100]};
	}
`;

export const HangulBtn = styled.button`
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	${flexCenter}
	width: 48px;
	height: 25px;
	cursor: pointer;
	border-radius: 4px;
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

	&:hover {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		border: 1px solid ${({ theme }) => theme.PALETTE.orange[100]};
	}

	&:disabled {
		cursor: not-allowed;
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		border: 1px solid ${({ theme }) => theme.PALETTE.white[150]};
		background-color: ${({ theme }) => theme.PALETTE.white[150]};

		&:hover {
			color: ${({ theme }) => theme.PALETTE.gray[100]};
			border: 1px solid ${({ theme }) => theme.PALETTE.white[150]};
		}
	}
`;

const buttonBgReset = css`
	background: none;
	font-size: 0;
	width: 25px;
	height: 25px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 10px 12px;
`;

export const LeftButton = styled(HangulBtn)`
	${buttonBgReset}
	background-image: url('/assets/icons/pagination-left.svg');

	&:hover {
		background-image: url('/assets/icons/pagination-left-color.svg');
	}
`;

export const RightButton = styled(LeftButton)`
	background-image: url('/assets/icons/pagination-right.svg');

	&:hover {
		background-image: url('/assets/icons/pagination-right-color.svg');
	}
`;
