import styled from 'styled-components';
import { flexCenter, flexColumn, flexColumnCenter } from 'styles/common';

export const FormBox = styled.form`
	width: 320px;
	${flexColumn}
	gap: 6px;

	> div:nth-child(3) {
		margin-bottom: -20px;
	}
`;

export const Notice = styled.div`
	${flexCenter}

	width: 100%;
	margin-top: 2px;
	gap: 8px;

	> p {
		color: ${({ theme }) => theme.PALETTE.gray[200]};
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		font-weight: 400;
	}

	> img {
		width: 14px;
		height: 14px;
	}
`;

export const ButtonBox = styled.div`
	margin-top: 30px;
	${flexColumnCenter}
	gap: 16px;

	> div:first-child {
		height: 14px;
	}
`;
