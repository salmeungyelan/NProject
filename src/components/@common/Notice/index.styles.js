import styled from 'styled-components';
import { flexCenter } from 'styles/common';

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
