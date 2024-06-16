import styled from 'styled-components';
import { flexColumn, flexColumnCenter } from 'styles/common';

export const FormBox = styled.form`
	width: 320px;
	${flexColumnCenter}
	gap: 140px;

	> div {
		${flexColumn}
	}
`;

export const InputBox = styled.div`
	width: 320px;
`;

export const H1 = styled.h1`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	margin-bottom: 12px;
`;

export const Message = styled.p`
	margin-top: 16px;
	font-weight: 400;
	white-space: pre-line;
	line-height: 22px;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[100]};
`;
