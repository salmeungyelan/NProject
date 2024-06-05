import Iphone from '../Iphone';
import * as S from './index.styles';

import Card from 'components/@common/Card';

function List() {
	return (
		<S.Body>
			{/* <S.Iphone></S.Iphone> */}
			<Iphone />

			<S.ReviewIng>
				<S.Title>
					<span>현재 진행 중인 리뷰 보러 가기</span>
					<img src="/assets/icons/pagination-right.svg" />
				</S.Title>

				<S.CardList>
					<Card />
					<Card />
					<Card />
					<Card />
				</S.CardList>
			</S.ReviewIng>

			<S.ReviewFin>
				<S.Title>
					<span>완료된 리뷰 보러 가기</span>
					<img src="/assets/icons/pagination-right.svg" />
				</S.Title>

				<S.CardList>
					<Card />
					<Card />
					<Card />
					<Card />
				</S.CardList>
			</S.ReviewFin>
		</S.Body>
	);
}

export default List;
