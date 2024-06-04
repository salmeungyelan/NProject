import styled from 'styled-components';
import { flexAlignCenter, flexColumn, flexColumnCenter } from 'styles/common';

export const FormBox = styled.form`
	width: 320px;
	${flexColumnCenter}
	gap: 140px;

	> div {
		${flexColumn}
		gap: 20px;
	}
`;

export const InputBox = styled.div`
	width: 320px;

	> p {
		height: 16px;
		margin-top: 4px;
		font-weight: 400;
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		color: ${({ theme }) => theme.PALETTE.red[100]};
	}
`;

export const H1 = styled.h1`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.re};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	margin-bottom: 10px;
`;

export const EX = styled.div`
	${flexAlignCenter}
	margin-top: 4px;

	> span {
		font-weight: 400;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
	}

	> img {
		width: 21px;
	}
`;
