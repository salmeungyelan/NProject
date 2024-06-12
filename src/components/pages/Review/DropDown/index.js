import { useState } from 'react';

import * as S from './index.styles';

function DropDown() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('최신순');

	const options = [
		{ value: 'latest', label: '최신순' },
		{ value: 'oldest', label: '오래된순' },
		{ value: 'high-rating', label: '별점 높은순' },
		{ value: 'low-rating', label: '별점 낮은순' },
	];

	const handleOptionClick = option => {
		setSelectedOption(option.label);
		setIsOpen(false);
	};

	const filteredOptions = options.filter(
		option => option.label !== selectedOption,
	);

	return (
		<S.CustomSelectContainer>
			<S.SelectStyled onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
				{selectedOption}
				<S.DropdownArrow>
					<img src={`/assets/icons/${isOpen ? `up.svg` : `down.svg`}`} />
				</S.DropdownArrow>
			</S.SelectStyled>

			{isOpen && (
				<S.OptionsContainer>
					{filteredOptions.map((option, index) => (
						<S.Option key={index} onClick={() => handleOptionClick(option)}>
							{option.label}
						</S.Option>
					))}
				</S.OptionsContainer>
			)}
		</S.CustomSelectContainer>
	);
}

export default DropDown;
