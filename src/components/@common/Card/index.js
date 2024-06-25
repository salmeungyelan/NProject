import { Link, useLocation } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

import Progress from '../Progress';

function Card(props) {
	const { data } = props;

	// 메인인지 아닌지 확인
	const { pathname } = useLocation();
	const main = pathname.split('/')[1] !== 'main';

	const { id, progress, ko_pro, writer, previewImg, title } = data;

	// 이미지 없을 경우
	const imgSrc = !previewImg ? '/assets/images/noImage.png' : previewImg;

	// 별점 계산
	const rate = [];

	for (let i = 0; i < 5; i++) {
		if (data.rate > i) rate.push(<img src="/assets/icons/star-color.svg" />);
		else rate.push(<img src="/assets/icons/star.svg" />);
	}

	return (
		<S.Card $main={main}>
			<Link to={LINK.REVIEW_POST + `${id}`}>
				<div>
					<img src={imgSrc} />
				</div>

				<S.MainBox>
					<S.Title $main={main}>
						<div>{title}</div>
						<Progress variant={progress}>{ko_pro}</Progress>
					</S.Title>

					<S.Rate>
						{(progress === 'fin' || progress === 'ing') && (
							<S.Writer>{writer}</S.Writer>
						)}

						{progress === 'fin' && (
							<S.Rate>
								<div>{rate}</div>
								{data.rate}
							</S.Rate>
						)}
					</S.Rate>
				</S.MainBox>
			</Link>
		</S.Card>
	);
}

export default Card;
