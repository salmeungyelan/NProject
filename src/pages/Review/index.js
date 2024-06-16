import { useState } from 'react';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Card from 'components/@common/Card';
import Button from 'components/@common/Button';
import MultiSelect from 'components/@common/MultiSelect';
import Category from 'components/pages/Review/Category';
import DropDown from 'components/pages/Review/DropDown';

function Review() {
	const [data, setData] = useState(0);

	return (
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
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</S.CardBox>
					) : (
						<S.NoPost>
							<span>등록된 게시글이 없습니다.</span>
							<Button variant="default" size="height">
								등록하기
							</Button>
						</S.NoPost>
					)}
				</S.Main>
			</S.MainBox>

			{/* 페이지네이션 */}
			{data ? <div>1</div> : ''}
		</S.Body>
	);
}

export default Review;
