import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Footer = styled.div`
	${flexCenter}

	height: 100px;
	background-color: ${({ theme }) => theme.PALETTE.gray[300]};

	color: ${({ theme }) => theme.PALETTE.white[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-weight: 300;
`;
