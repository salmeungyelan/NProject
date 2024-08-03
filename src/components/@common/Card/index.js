import { Link } from 'react-router-dom';

import usePathname from 'hooks/usePathname';
import LINK from 'constants/link';

import * as S from './index.styles';

import Progress from '../Progress';

function Card({ data }) {
	// 메인인지 아닌지 확인
	const { pathname } = usePathname();
	const isReview = pathname === LINK.REVIEW;

	const { id, title, status, statusLabel, picUsername, thumbnail, star } = data;

	// 이미지 없을 경우
	const imgSrc = !thumbnail ? '/assets/images/noImage.png' : thumbnail;

	// 별점 계산
	const rate = [];

	for (let i = 0; i < 5; i++) {
		if (star > i) rate.push(<img src="/assets/icons/star-color.svg" key={i} />);
		else rate.push(<img src="/assets/icons/star.svg" key={i} />);
	}

	return (
		<S.Card $isReview={isReview}>
			<Link to={LINK.REVIEW_POST + `/${id}`}>
				<div>
					{imgSrc.includes('mp4') && <video src={imgSrc} />}
					{!imgSrc.includes('mp4') && <img src={imgSrc} />}
				</div>

				<S.MainBox>
					<S.Title $isReview={isReview}>
						<div>{title}</div>
						<Progress variant={status}>{statusLabel}</Progress>
					</S.Title>

					<S.Rate>
						{(status === 'REVIEW_STATUS_03' ||
							status === 'REVIEW_STATUS_04') && (
							<S.Writer>{picUsername}</S.Writer>
						)}

						{status === 'REVIEW_STATUS_04' && (
							<S.Rate>
								<div>{rate}</div>
								{star || 0}
							</S.Rate>
						)}
					</S.Rate>
				</S.MainBox>
			</Link>
		</S.Card>
	);
}

export default Card;
