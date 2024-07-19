import styled from 'styled-components';
import { flexCenter, flexSpaceBetweenCenter } from 'styles/common';

export const CustomSelectContainer = styled.div`
	position: relative;
`;

export const SelectStyled = styled.div`
	border: 1px solid
		${({ theme, $isOpen }) =>
			$isOpen ? theme.PALETTE.orange[100] : theme.PALETTE.gray[0]};
	padding: 0 6px;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	border-radius: 4px;
	width: 100%;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	cursor: pointer;
	${flexSpaceBetweenCenter}
	height: 22px;
	width: 75px;
	color: ${({ theme }) => theme.PALETTE.gray[200]};

	@media screen and (min-width: 768px) {
		height: 26px;
		width: 100px;
		padding: 0 9px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
		height: 30px;
		width: 100px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const OptionsContainer = styled.div`
	border-radius: 4px;
	position: absolute;
	top: 120%;
	left: 0;
	width: 100%;
	max-height: 150px;
	overflow-y: auto;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	z-index: 1;
	padding: 4px;
`;

export const Option = styled.div`
	padding: 5px;
	cursor: pointer;
	color: ${({ theme, $selected }) =>
		$selected ? theme.PALETTE.orange[100] : theme.PALETTE.gray[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	border-radius: 4px;

	&:hover {
		background-color: ${({ theme }) => theme.PALETTE.ivory};
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	}

	background-color: ${({ theme, $selected }) =>
		$selected ? theme.PALETTE.ivory : theme.PALETTE.white[100]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const DropdownArrow = styled.span`
	pointer-events: none;
	${flexCenter}

	> img {
		width: 8px;
		height: 4px;
	}
`;
