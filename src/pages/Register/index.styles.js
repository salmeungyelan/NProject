import styled from 'styled-components';
import {
	flexAlignCenter,
	flexCenter,
	flexColumn,
	flexColumnCenter,
} from 'styles/common';

export const Body = styled.div`
	${flexColumnCenter}
	gap: 2.5rem;
	padding: 4rem 0;
`;

export const LogoBox = styled.div`
	${flexCenter}
	gap: 1rem;
`;

export const FormBox = styled.form`
	width: 320px;
	${flexColumnCenter}
	gap: 0.75rem;
`;

export const InputBox = styled.div`
	width: 320px;

	> p {
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
	margin-bottom: 0.625rem;
`;

export const CheckBox = styled.div`
	width: 100%;

	> div {
		height: 120px;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
		border-radius: 0.5rem;
		padding: 14px 22px;
	}

	> p {
		margin-top: 4px;
		font-weight: 400;
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		color: ${({ theme }) => theme.PALETTE.red[100]};
	}
`;

export const Check = styled.div`
	${flexColumn}
	justify-content: center;
	gap: 0.7rem;
`;

export const CheckItem = styled.div`
	${flexAlignCenter}
	gap: 0.5rem;
	font-weight: 400;

	> h1 {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	}

	> p {
		cursor: pointer;
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		color: ${({ theme }) => theme.PALETTE.gray[200]};
	}

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	}

	> input {
		width: 16px;
		height: 16px;
	}
`;

export const ButtonBox = styled.div`
	margin-top: 1rem;
`;
