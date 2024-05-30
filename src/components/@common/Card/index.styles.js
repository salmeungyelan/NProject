import styled from 'styled-components';

export const Title = styled.div`

`;

export const Writer = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-weight: 600;
	color: ${({ theme }) => theme.PALETTE.gray[100]};
`;
