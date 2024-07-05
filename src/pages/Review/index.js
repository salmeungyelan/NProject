import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import useApi from 'hooks/useApi';
import LINK from 'constants/link';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Category from 'components/pages/Review/Category';
import MultiSelect from 'components/@common/MultiSelect';
import DropDown from 'components/pages/Review/DropDown';
import Card from 'components/@common/Card';
import NoPost from 'components/@common/NoPost';
import Button from 'components/@common/Button';

function Review() {
	const { inputData, setInputData, handleChangeSearch } = useInput();

	const navigate = useNavigate();

	const [data, setData] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedStatus, setSelectedStatus] = useState([
		{
			codeLabel: '전체',
			sortBy: '',
		},
	]);
	const [selectedOption, setSelectedOption] = useState({
		codeLabel: '최신순',
		sortBy: 'REVIEW_FILTER_01',
	});

	const path = `/client/reviews?size=10&page=1`;

	const { result, trigger } = useApi({
		path,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setData(result.data.reviews);
		}
	}, [result.data]);

	const category = selectedCategory && `&type=${selectedCategory}`;
	const option = `&sortBy=${selectedOption.sortBy}`;
	const status =
		selectedStatus[0].sortBy &&
		selectedStatus.map(stat => `&status=${stat.sortBy}`).join('');
	const searchData = `&title=${inputData}&requirement=${inputData}`;

	// 카테고리 / 옵션 / 상태만 변화했을 때 api 호출
	const fetchData = async () => {
		try {
			const req = await trigger({
				path: path + category + option + status,
				applyResult: true,
			});

			if (req.data) {
				setData(req.data.reviews);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [selectedCategory, selectedOption, selectedStatus]);

	// 검색
	const handleClickSearch = async () => {
		try {
			const req = await trigger({
				path: path + category + option + status + searchData,
			});

			if (req.data) {
				setData(req.data.reviews);
			}
		} catch (error) {}
	};

	// 검색 초기화
	const handleReset = async () => {
		setInputData('');

		try {
			const req = await trigger({
				path: path + category + option + status,
			});

			if (req.data) {
				setData(req.data.reviews);
			}
		} catch (error) {}
	};

	const handleClickApply = () => {
		navigate(LINK.REVIEW_APPLY);
	};

	return (
		<>
			<S.Body>
				<Title title="REVIEW LIST">
					자사 영업일 기준, 하루 한 번 신청 가능합니다.
				</Title>

				<S.MainBox>
					<Search
						search={inputData}
						onChange={handleChangeSearch}
						onClick={handleClickSearch}
						reset={handleReset}
					/>

					<S.Main>
						<S.SelectBox>
							<Category
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
							/>

							<S.MultiSelect>
								<MultiSelect
									selectedStatus={selectedStatus}
									setSelectedStatus={setSelectedStatus}
								/>
								<DropDown
									setSelectedOption={setSelectedOption}
									selectedOption={selectedOption}
								/>
							</S.MultiSelect>
						</S.SelectBox>

						{data ? (
							<S.CardBox>
								{data.map((el, idx) => (
									<Card data={el} key={idx} />
								))}
							</S.CardBox>
						) : (
							<NoPost review>등록된 게시글이 없습니다.</NoPost>
						)}
					</S.Main>
				</S.MainBox>

				{/* 페이지네이션 */}
				{data ? <div>1</div> : ''}
			</S.Body>

			<S.ApplyBtnBox>
				<Button size="height" variant="default" onClick={handleClickApply}>
					리뷰 신청하기
				</Button>
			</S.ApplyBtnBox>
		</>
	);
}

export default Review;
