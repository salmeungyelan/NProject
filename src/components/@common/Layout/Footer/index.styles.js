import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Footer = styled.div`
	width: 100%;
	${flexCenter}
	margin-bottom: 66px;

	height: 100px;
	background-color: ${({ theme }) => theme.PALETTE.gray[300]};

	color: ${({ theme }) => theme.PALETTE.white[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	font-weight: 300;

	@media screen and (min-width: 768px) {
		margin: 0;
	}
`;
