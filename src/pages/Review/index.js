import * as S from './index.styles';

import Category from 'components/pages/Review/Category';
import DropDown from 'components/pages/Review/DropDown';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Card from 'components/@common/Card';

function Review() {
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
						<DropDown />
					</S.SelectBox>

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
				</S.Main>
			</S.MainBox>

			{/* 페이지네이션 */}
			<div>1</div>
		</S.Body>
	);
}

export default Review;
