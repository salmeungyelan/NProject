import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';

function DropDown(props) {
	const { option, selectedOption, setSelectedOption } = props;

	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	const handleClickOption = (codeLabel, codeValue) => {
		const params = new URLSearchParams(location.search);
		params.set('optionCode', codeLabel);
		params.set('sortBy', codeValue);
		navigate(`?${params.toString()}`, { replace: true });

		setSelectedOption({
			codeLabel,
			sortBy: codeValue,
		});
		setIsOpen(false);
	};

	return (
		<S.CustomSelectContainer>
			<S.SelectStyled onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
				{selectedOption.codeLabel}
				<S.DropdownArrow>
					<img src={`/assets/icons/${isOpen ? `up.svg` : `down.svg`}`} />
				</S.DropdownArrow>
			</S.SelectStyled>

			{isOpen && (
				<S.OptionsContainer>
					{option &&
						option.map((option, i) => (
							<S.Option
								key={i}
								$selected={option.codeLabel === selectedOption.codeLabel}
								onClick={() =>
									handleClickOption(option.codeLabel, option.codeValue)
								}
							>
								{option.codeLabel}
							</S.Option>
						))}
				</S.OptionsContainer>
			)}
		</S.CustomSelectContainer>
	);
}

export default DropDown;
