import { useEffect, useState } from 'react';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Card from 'components/@common/Card';
import MultiSelect from 'components/@common/MultiSelect';
import NoPost from 'components/@common/NoPost';
import Category from 'components/pages/Review/Category';
import DropDown from 'components/pages/Review/DropDown';
import Loading from 'components/@common/Loading/Loading';

function Review() {
	const [data, setData] = useState([]);

	const { result, isLoading } = useApi({
		path: `/client/reviews`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setData(result.data.reviews);
		}
	}, [result.data]);

	return (
		<>
			{isLoading && <Loading />}
			<S.Body>
				<Title title={'REVIEW LIST'}>
					자사 영업일 기준, 하루 한 번 신청 가능합니다.
				</Title>

				<S.MainBox>
					<Search />

					<S.Main>
						<S.SelectBox>
							<Category />

							<S.MultiSelect>
								<MultiSelect />
								<DropDown />
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
		</>
	);
}

export default Review;
