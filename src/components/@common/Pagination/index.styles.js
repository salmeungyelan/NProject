import { css, styled } from 'styled-components';
import { flexCenter } from 'styles/common';

export const PaginationBox = styled.div`
	${flexCenter}
	gap: 10px;

	@media screen and (min-width: 768px) {
		gap: 20px;
	}
`;

export const NextPrevBox = styled(PaginationBox)`
	gap: 4px;

	@media screen and (min-width: 768px) {
		gap: 8px;
	}
`;

export const PageNumBox = styled(NextPrevBox)``;

export const Number = styled.div`
	${flexCenter}
	width: 20px;
	height: 20px;
	border-radius: 4px;
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};

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

	@media screen and (min-width: 768px) {
		width: 25px;
		height: 25px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const HangulBtn = styled.button`
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	${flexCenter}
	width: 40px;
	height: 20px;
	cursor: pointer;
	border-radius: 4px;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
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

	@media screen and (min-width: 768px) {
		height: 25px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

const buttonBgReset = css`
	background: none;
	font-size: 0;
	width: 20px;
	height: 20px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 8px 10px;

	@media screen and (min-width: 768px) {
		width: 25px;
		height: 25px;
		background-size: 10px 12px;
	}
`;

export const LeftButton = styled(HangulBtn)`
	${buttonBgReset}
	background-image: url('/assets/icons/pagination-left.svg');

	&:hover {
		background-image: url('/assets/icons/pagination-left-color.svg');
	}

	&:disabled {
		cursor: not-allowed;

		&:hover {
			background-image: url('/assets/icons/pagination-left.svg');
		}
	}
`;

export const RightButton = styled(LeftButton)`
	background-image: url('/assets/icons/pagination-right.svg');

	&:hover {
		background-image: url('/assets/icons/pagination-right-color.svg');
	}

	&:disabled {
		&:hover {
			background-image: url('/assets/icons/pagination-right.svg');
		}
	}
`;
