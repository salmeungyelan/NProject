import styled from 'styled-components';
import {
	flexAlignCenter,
	flexCenter,
	flexColumn,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const MultiselectContainer = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	border-radius: 4px;
	cursor: pointer;
	position: relative;
`;

export const SelectStyled = styled.div`
	border: 1px solid
		${({ theme, $expanded }) =>
			$expanded ? theme.PALETTE.orange[100] : theme.PALETTE.gray[0]};
	padding: 0 6px;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	border-radius: 4px;
	width: 100%;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	cursor: pointer;
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	height: 22px;
	width: 85px;

	@media screen and (min-width: 768px) {
		height: 26px;
		width: 112px;
		padding: 0 9px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
		height: 30px;
		width: 123px;
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

export const CheckBoxContainer = styled.div`
	z-index: 1;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	${flexColumn}
	max-height: fit-content;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-radius: 4px;
	position: absolute;
	display: ${({ $expanded }) => ($expanded ? 'block' : 'none')};
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	top: 110%;
	overflow-y: auto;
	padding: 4px;
	width: 85px;

	@media screen and (min-width: 768px) {
		width: 112px;
		padding: 6px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
		padding: 8px;
		width: 123px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const Label = styled.div`
	${flexAlignCenter}
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 5px 4px;
	position: relative;
	cursor: pointer;
	gap: 5px;

	> input {
		position: absolute;
		clip: rect(0 0 0 0);
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	> label::before {
		cursor: pointer;
		display: inline-block;
		content: '';
		width: 10.4px;
		height: 10.4px;
		border-radius: 2px;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
		background-color: ${({ theme }) => theme.PALETTE.white[100]};
	}

	& input:checked + label::before {
		width: 12px;
		height: 12px;
		background-image: url('/assets/icons/multi-select.svg');
		border: none;
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};

		> label::before {
			width: 12.4px;
			height: 12.4px;
		}

		& input:checked + label::before {
			width: 14px;
			height: 14px;
		}
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};

		> label::before {
			width: 14px;
			height: 14px;
		}

		& input:checked + label::before {
			width: 16px;
			height: 16px;
		}
	}
`;

export const OverSelect = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`;

export const SelectedOption = styled.option`
	> div {
		padding: 5px;
		border-radius: 50px;
	}
`;
