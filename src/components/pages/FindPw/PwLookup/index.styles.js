import styled from 'styled-components';
import { flexColumn, flexColumnCenter } from 'styles/common';

export const FormBox = styled.form`
	width: 320px;
	${flexColumn}
	gap: 6px;

	> div:nth-child(3) {
		margin-bottom: -20px;
	}
`;

export const InputBox = styled.div`
	width: 100%;
	${flexColumn}
	gap: 16px;

	> div > p {
		height: 16px;
		margin-top: 4px;
		font-weight: 400;
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		color: ${({ theme }) => theme.PALETTE.red[100]};
	}
`;

export const Title = styled.h1`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.re};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
`;

export const ButtonBox = styled.div`
	margin-top: 30px;
	${flexColumnCenter}
	gap: 16px;
`;
