import styled from 'styled-components';

export const Body = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
`;

export const Category = styled.div`
	padding: 5px 10px;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	border-radius: 26px;
	cursor: pointer;

	color: ${({ theme, $selected }) =>
		$selected ? theme.PALETTE.orange[100] : theme.PALETTE.gray[100]};
	border: 1px solid
		${({ theme, $selected }) =>
			$selected ? theme.PALETTE.orange[100] : theme.PALETTE.gray[0]};

	&:hover {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		border: 1px solid ${({ theme }) => theme.PALETTE.orange[100]};
	}

	@media screen and (min-width: 768px) {
		padding: 6px 14px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
		padding: 7px 16px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;
