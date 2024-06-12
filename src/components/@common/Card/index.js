import { Link, useLocation } from 'react-router-dom';

import * as S from './index.styles';

import Progress from '../Progress';

function Card() {
	const { pathname } = useLocation();
	const main = pathname.split('/')[1] === 'main';

	return (
		<S.Card $main={main}>
			<Link to={'/review/post/1'}>
				<div>
					<img src="/assets/images/example.png" />
				</div>

				<S.MainBox>
					<S.Title>
						<div>리뷰 제목</div>
						<Progress variant={'fin'}>완료</Progress>
					</S.Title>

					<S.Rate>
						<S.Writer>작성자</S.Writer>

						<S.Rate>
							<div>
								<img src="/assets/icons/star-color.svg" />
								<img src="/assets/icons/star-color.svg" />
								<img src="/assets/icons/star-color.svg" />
								<img src="/assets/icons/star-half.svg" />
								<img src="/assets/icons/star.svg" />
							</div>
							4.9
						</S.Rate>
					</S.Rate>
				</S.MainBox>
			</Link>
		</S.Card>
	);
}

export default Card;
