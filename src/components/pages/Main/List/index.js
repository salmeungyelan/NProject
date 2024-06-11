import { Link } from 'react-router-dom';

import * as S from './index.styles';

import Iphone from '../Iphone';

import Card from 'components/@common/Card';

function List() {
	return (
		<S.Body>
			<Iphone />

			<S.ReviewIng>
				<S.Title>
					<Link to={'/review'}>
						<span>현재 진행 중인 리뷰 보러 가기</span>
						<img src="/assets/icons/pagination-right.svg" />
					</Link>
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
					<Link to={'/review'}>
						<span>완료된 리뷰 보러 가기</span>
						<img src="/assets/icons/pagination-right.svg" />
					</Link>
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
