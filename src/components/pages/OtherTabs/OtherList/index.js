import { useState } from 'react';

import * as S from './index.styles';

import MultiSelect from 'components/@common/MultiSelect';

import Filter from 'components/@common/Filter';
import Progress from 'components/@common/Progress';
import TempSave from './TempSave';
import Pending from './Pending';
import Finish from './Finish';

const listUp = [
	{
		ko_progress: '임시저장',
		en_progress: 'tempSave',
		CoName: '유투브',
		date: '2024년 04월 12일',
	},
	{
		ko_progress: '대기',
		en_progress: 'wait',
		CoName: 'Naver',
		date: '2024년 04월 10일',
	},
	{
		ko_progress: '진행중',
		en_progress: 'ing',
		CoName: 'NP PROJECT',
		date: '2024년 04월 12일',
		manager: '모두',
	},
	{
		ko_progress: '완료',
		en_progress: 'fin',
		CoName: '디자이너',
		date: '2024년 03월 17일',
		manager: '최은채',
	},
	{
		ko_progress: '완료',
		en_progress: 'fin',
		CoName: '프론트엔드',
		date: '2024년 03월 23일',
		manager: '조아연',
	},
	{
		ko_progress: '완료',
		en_progress: 'fin',
		CoName: '백엔드',
		date: '2024년 03월 28일',
		manager: '김지황',
	},
	{
		ko_progress: '완료',
		en_progress: 'fin',
		CoName: '대표',
		date: '2024년 03월 31일',
		manager: '엄재현',
	},
	{
		ko_progress: '완료',
		en_progress: 'fin',
		CoName: '유투브',
		date: '2024년 04월 01일',
		manager: '박소예',
	},
	{
		ko_progress: '완료',
		en_progress: 'fin',
		CoName: '유투브',
		date: '2024년 04월 05일',
		manager: '신지홍',
	},
];

function OtherList() {
	const [display, setDisplay] = useState(null);

	const handleClickDown = index => {
		setDisplay(prev => (prev === index ? null : index));
	};

	return (
		<S.Body>
			<S.FilterBox>
				<Filter />
				<MultiSelect />
			</S.FilterBox>

			<S.ListBox>
				{listUp.map((list, idx) => (
					<div key={idx}>
						<S.List onClick={() => handleClickDown(idx)}>
							<div>
								<Progress variant={list.en_progress}>
									{list.ko_progress}
								</Progress>
								<S.CoName>{list.CoName}</S.CoName>
							</div>
							<S.Date>
								{list.manager && `${list.manager}ㅣ`}
								{list.date}
							</S.Date>
							<S.DownBtn src="/assets/icons/down.svg" />
						</S.List>

						{list.en_progress === 'tempSave' && display === idx && (
							<TempSave display={display === idx} />
						)}

						{(list.en_progress === 'wait' || list.en_progress === 'ing') &&
							display === idx && (
								<Pending
									display={display === idx}
									progress={list.en_progress}
								/>
							)}

						{list.en_progress === 'fin' && display === idx && (
							<Finish display={display === idx} />
						)}
					</div>
				))}
			</S.ListBox>
		</S.Body>
	);
}

export default OtherList;
