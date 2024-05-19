import styled from 'styled-components';
import { bodyContainer, flexSpaceBetweenCenter } from 'styles/common';

export const Header = styled.div`
	${bodyContainer}
	height: 140px;
`;

export const TopBox = styled.div`
	${flexSpaceBetweenCenter}
	background-color: ${({ theme }) => theme.PALETTE.ivory};
`;
