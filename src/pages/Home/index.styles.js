import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	height: 100vh;
	${flexColumn}
	justify-content: space-between;
`;

export const LoginBox = styled.div`
	height: 100%;
	margin: 0 auto;

	${flexCenter}
	flex-direction: column;
	gap: 3.75rem;
`;

export const FormBox = styled.form`
	${flexColumn}
	gap: 2rem;

	> div {
		${flexColumn}
		gap: 1rem;
	}
`;

export const InputBox = styled.div`
	width: 320px;
	max-width: 100%;
	position: relative;

	> input {
		position: relative;
	}

	> input:focus {
		border: 1.5px solid ${({ theme }) => theme.PALETTE.orange[100]};
	}

	> input:focus + label,
	input:valid + label {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		font-size: ${({ theme }) => theme.FONT_SIZE.es};

		top: 4px;
		transform: translate(0px, -10px);
		background-color: ${({ theme }) => theme.PALETTE.white[100]};
	}
`;

export const Label = styled.label`
	top: 10px;
	left: 12px;
	padding: 0 4px;

	color: ${({ theme }) => theme.PALETTE.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-weight: 400;

	position: absolute;
	transition: all 0.5s ease;
`;

export const Text = styled.div`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	color: ${({ theme }) => theme.PALETTE.red[100]};
	line-height: 18px;
`;

export const LinkBox = styled.div`
	margin-top: 2.8rem;
	${flexCenter}
	gap: 0.5rem;

	> :link {
		color: ${({ theme }) => theme.PALETTE.gray[200]};
		font-size: ${({ theme }) => theme.FONT_SIZE.re};
		font-weight: 400;
		text-decoration: none;
	}

	> :visited {
		color: ${({ theme }) => theme.PALETTE.gray[200]};
	}
`;

export const Bottom = styled.div`
	width: 100%;

	& img {
		width: 100%;
		height: 84px;
	}
`;
