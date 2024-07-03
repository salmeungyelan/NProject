import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	height: 100vh;
	${flexColumn}
	justify-content: space-between;
`;

export const LoginBox = styled.div`
	height: 100%;
	${flexCenter}
	flex-direction: column;
	gap: 60px;
`;

export const FormBox = styled.form`
	${flexColumn}
	gap: 32px;

	> div {
		${flexColumn}
		gap: 16px;
	}
`;

export const InputBox = styled.div`
	width: 320px;
	position: relative;

	> input:focus {
		border: 1.5px solid ${({ theme }) => theme.PALETTE.orange[100]};
	}

	> input:focus + label,
	> input:not(:placeholder-shown) + label {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		top: 4px;
		transform: translate(0px, -10px);
		background-color: ${({ theme }) => theme.PALETTE.white[100]};
	}
`;

export const Label = styled.label`
	top: 12px;
	left: 16px;
	padding: 0 4px;

	color: ${({ theme }) => theme.PALETTE.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	font-weight: 400;

	position: absolute;
	transition: all 0.5s ease;
`;

export const Text = styled.div`
	height: 24px;
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.red[100]};
	line-height: 18px;
`;

export const LinkBox = styled.div`
	margin-top: 58px;
	${flexCenter}
	gap: 8px;

	> :link,
	:visited {
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		font-weight: 400;
		text-decoration: none;
	}

	> a:hover {
		color: ${({ theme }) => theme.PALETTE.gray[200]};
	}
`;

export const Bottom = styled.div`
	& img {
		width: 100%;
		height: 84px;
	}
`;
