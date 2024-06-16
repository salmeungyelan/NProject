import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.styles';

import Iphone from '../Iphone';

import Card from 'components/@common/Card';
import Button from 'components/@common/Button';

function List() {
	const [data, setData] = useState(3);

	return (
		<S.Body $data={data}>
			{data ? <Iphone /> : <></>}

			<S.ReviewIng>
				<S.Title>
					<Link to={'/review'}>
						<span>현재 진행 중인 리뷰 보러 가기</span>
						<img src="/assets/icons/pagination-right.svg" />
					</Link>
				</S.Title>

				{data ? (
					<S.CardList>
						<Card progress="ing" ko_pro="진행중" />
						<Card progress="ing" ko_pro="진행중" />
						<Card progress="wait" ko_pro="대기" noImage />
						<Card progress="tempSave" ko_pro="임시저장" noImage />
					</S.CardList>
				) : (
					<S.NoPost>
						<span>등록된 게시글이 없습니다.</span>
						<Button variant="default" size="height">
							등록하러 가기
						</Button>
					</S.NoPost>
				)}
			</S.ReviewIng>

			<S.ReviewFin>
				<S.Title>
					<Link to={'/review'}>
						<span>완료된 리뷰 보러 가기</span>
						<img src="/assets/icons/pagination-right.svg" />
					</Link>
				</S.Title>

				{data ? (
					<S.CardList>
						<Card progress="fin" ko_pro="완료" />
						<Card progress="fin" ko_pro="완료" />
						<Card progress="fin" ko_pro="완료" />
						<Card progress="fin" ko_pro="완료" />
					</S.CardList>
				) : (
					<S.NoPost>
						<span>등록된 게시글이 없습니다.</span>
						<Button variant="default" size="height">
							등록하러 가기
						</Button>
					</S.NoPost>
				)}
			</S.ReviewFin>
		</S.Body>
	);
}

export default List;
