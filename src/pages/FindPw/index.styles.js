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

export const FormBox = styled.form`
	width: 320px;
	${flexColumn}
	gap: 20px;

	> div:nth-child(3) {
		margin-bottom: -20px;
	}
`;

export const InputBox = styled.div`
	width: 100%;
	${flexColumn}
	gap: 16px;
`;

export const Title = styled.h1`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.re};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
`;

export const Notice = styled.div`
	${flexCenter}

	width: 100%;
	margin-top: 2px;
	gap: 8px;

	> p {
		color: ${({ theme }) => theme.PALETTE.gray[200]};
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		font-weight: 400;
	}

	> img {
		width: 14px;
		height: 14px;
	}
`;

export const ButtonBox = styled.div`
	margin-top: 8px;
	${flexColumnCenter}
	gap: 20px;
`;

export const Bottom = styled.div`
	width: 100%;

	> img {
		width: 100%;
		height: 82px;
	}
`;
