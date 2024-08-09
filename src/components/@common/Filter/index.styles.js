import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';

export const Body = styled.div`
	${flexAlignCenter}
	gap: 10px;

	@media screen and (min-width: 768px) {
		gap: 16px;
	}
`;

export const Sort = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	${flexCenter}
	gap: 3px;
	cursor: pointer;

	> span {
		color: ${({ theme, selected }) =>
			selected ? theme.PALETTE.orange[100] : theme.PALETTE.gray[100]};
	}

	> p {
		color: ${({ theme, selected }) =>
			selected ? theme.PALETTE.gray[300] : theme.PALETTE.gray[100]};
	}

	&:hover {
		& p,
		span {
			color: ${({ theme }) => theme.PALETTE.gray[200]};
		}
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;
