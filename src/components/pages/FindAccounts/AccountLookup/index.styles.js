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

export const ButtonBox = styled.div`
	margin-top: 30px;
	${flexColumnCenter}
	gap: 16px;

	> div:first-child {
		height: 14px;
	}
`;
