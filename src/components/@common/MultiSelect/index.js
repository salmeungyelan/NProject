import React, { useState, useRef, useEffect } from 'react';

import * as S from './index.styles';

function MultiSelect() {
	const CheckBox = useRef(null);
	const [expanded, setExpanded] = useState(false);
	const [selectedPositions, setSelectedPositions] = useState([]);

	const checkOption = [
		{ id: 1, value: 'all', name: '전체' },
		{ id: 2, value: 'tempSave', name: '임시 저장' },
		{ id: 3, value: 'waiting', name: '대기' },
		{ id: 4, value: 'ing', name: '진행중' },
		{ id: 5, value: 'finish', name: '완료' },
	];

	const showCheckboxes = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		if (selectedPositions.length === 4) {
			setExpanded(false);
		}

		console.log(selectedPositions);
	}, [selectedPositions]);

	const handlePositionChange = positionValue => {
		let updatedPositions;

		if (selectedPositions.includes(positionValue)) {
			updatedPositions = selectedPositions.filter(pos => pos !== positionValue);
		} else {
			if (selectedPositions.length < 4) {
				updatedPositions = [...selectedPositions, positionValue];
			} else {
				alert('야');
				return;
			}
		}

		setSelectedPositions(updatedPositions);
	};

	return (
		<S.MultiselectContainer>
			<S.SelectStyled onClick={showCheckboxes} $expanded={expanded}>
				상태
				<S.DropdownArrow>
					<img src={`/assets/icons/${expanded ? `up.svg` : `down.svg`}`} />
				</S.DropdownArrow>
			</S.SelectStyled>

			<S.CheckBoxContainer ref={CheckBox} $expanded={expanded}>
				{checkOption.map(el => (
					<S.Label key={el.id}>
						<input
							type="checkbox"
							id={el.value}
							checked={selectedPositions.includes(el.value)}
							onChange={() => handlePositionChange(el.value)}
						/>
						<label htmlFor={el.value} />
						<span>{el.name}</span>
					</S.Label>
				))}
			</S.CheckBoxContainer>
		</S.MultiselectContainer>
	);
}

export default MultiSelect;
