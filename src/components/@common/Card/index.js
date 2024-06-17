import { Link, useLocation } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

import Progress from '../Progress';

function Card(props) {
	const { progress, ko_pro, noImage } = props;

	const { pathname } = useLocation();
	const main = pathname.split('/')[1] === 'main';

	const imgSrc = noImage
		? '/assets/images/noImage.png'
		: '/assets/images/example.png';

	return (
		<S.Card $main={main}>
			<Link to={LINK.REVIEW_POST + '/1'}>
				<div>
					<img src={imgSrc} />
				</div>

				<S.MainBox>
					<S.Title>
						<div>리뷰 제목</div>
						<Progress variant={progress}>{ko_pro}</Progress>
					</S.Title>

					<S.Rate>
						{(progress === 'fin' || progress === 'ing') && (
							<S.Writer>작성자</S.Writer>
						)}

						{progress === 'fin' && (
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
						)}
					</S.Rate>
				</S.MainBox>
			</Link>
		</S.Card>
	);
}

export default Card;
