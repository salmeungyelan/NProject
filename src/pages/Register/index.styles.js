import styled from 'styled-components';
import {
	flexAlignCenter,
	flexCenter,
	flexColumn,
	flexColumnCenter,
} from 'styles/common';

export const Body = styled.div`
	${flexColumnCenter}
	gap: 40px;
	padding: 64px 0;
`;

export const LogoBox = styled.div`
	${flexCenter}
	gap: 16px;
`;

export const FormBox = styled.form`
	width: 320px;
	${flexColumnCenter}
	gap: 6px;
`;

export const CheckBox = styled.div`
	width: 100%;

	> div {
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
		border-radius: 8px;
		padding: 14px 22px;
	}

	> p {
		margin-top: 4px;
		font-weight: 400;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.red[100]};
	}
`;

export const TermMsg = styled.p`
	height: 12px;
	margin-top: 4px;
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.red[100]};
	white-space: pre-line;
`;

export const H1 = styled.h1`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	margin-bottom: 10px;
`;

export const Check = styled.div`
	${flexColumn}
	justify-content: center;
	gap: 13px;
`;

export const CheckAll = styled.div`
	display: flex;
	gap: 8px;
	font-weight: 400;

	> h1 {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	}

	> input {
		position: absolute;
		clip: rect(0 0 0 0);
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	> label::before {
		display: inline-block;
		content: '';
		width: 16px;
		height: 16px;
		border-radius: 2px;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
		background-color: ${({ theme }) => theme.PALETTE.white[100]};
	}

	> input:checked + label::before {
		width: 18px;
		height: 18px;
		background-image: url('/assets/icons/register-check.svg');
		border: none;
	}
`;

export const CheckItem = styled(CheckAll)`
	${flexAlignCenter}

	> p {
		cursor: pointer;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.gray[200]};
	}

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	}
`;

export const ButtonBox = styled.div`
	width: 100%;
	margin-top: 24px;
`;
