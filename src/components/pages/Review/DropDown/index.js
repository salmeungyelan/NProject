import { useEffect, useState } from 'react';

import useApi from 'hooks/useApi';

import * as S from './index.styles';
import { useNavigate } from 'react-router-dom';

function DropDown(props) {
	const { selectedOption, setSelectedOption } = props;

	const [isOpen, setIsOpen] = useState(false);
	const [option, setOption] = useState([]);

	const navigate = useNavigate();

	const { result } = useApi({
		path: '/client/global-constants?typeValue=REVIEW_FILTER',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setOption(result.data.globalConstantList);
		}
	}, [result.data]);

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
						option.map(option => (
							<S.Option
								key={option.id}
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
