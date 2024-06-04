import styled from 'styled-components';
import { flexCenter, flexColumn, flexColumnCenter } from 'styles/common';

export const Body = styled.div`
	height: 100vh;
	${flexColumn}
	justify-content: space-between;
`;

export const Top = styled.div`
	height: 100%;
	margin: 0 auto;
	${flexColumnCenter}
	gap: 40px;
`;
export const LogoBox = styled.div`
	${flexCenter}
`;

export const Bottom = styled.div`
	width: 100%;

	> img {
		width: 100%;
		height: 82px;
	}
`;
