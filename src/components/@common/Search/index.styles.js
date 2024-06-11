import styled from 'styled-components';
import { flexCenter, flexSpaceBetweenCenter } from 'styles/common';

export const Body = styled.div`
	${flexSpaceBetweenCenter}
	gap: 5px;
	height: 28px;

	@media screen and (min-width: 768px) {
		height: 32px;
	}

	@media screen and (min-width: 1200px) {
		height: 40px;
	}
`;

export const SearchBox = styled.div`
	position: relative;
	height: 100%;

	> img {
		width: 8px;
		position: absolute;
		top: 40%;
		left: 8px;
	}

	@media screen and (min-width: 768px) {
		> img {
			width: 12px;
			top: 35%;
			left: 12px;
		}
	}
`;

export const Input = styled.input`
	height: 100%;
	width: 168px;
	border-radius: 4px;
	padding: 8px 18px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.gray[200]};

	&::placeholder {
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.PALETTE.orange[100]};
		outline: none;
	}

	@media screen and (min-width: 768px) {
		width: 384px;
		padding: 8px 28px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};

		&::placeholder {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
		}
	}

	@media screen and (min-width: 1200px) {
		width: 1016px;
		padding: 8px 28px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};

		&::placeholder {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
		}
	}
`;

export const ButtonBox = styled.div`
	width: 58px;
	height: 100%;

	> button {
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		height: 100%;
	}

	@media screen and (min-width: 768px) {
		width: 84px;

		> button {
			box-shadow: none;
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
		}
	}
`;

export const ResetBox = styled(ButtonBox)`
	@media screen and (min-width: 768px) {
		width: 84px;
	}
`;

export const Button = styled.button`
	${flexCenter}
	width: 100%;
	height: 28px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-radius: 4px;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	> img {
		width: 10px;
		margin-right: 4px;
	}

	@media screen and (min-width: 768px) {
		> img {
			width: 14px;
			margin-right: 6px;
		}
	}
`;
