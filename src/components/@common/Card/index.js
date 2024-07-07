import { Link } from 'react-router-dom';

import usePathname from 'hooks/usePathname';
import LINK from 'constants/link';

import * as S from './index.styles';

import Progress from '../Progress';

function Card({ data }) {
	// 메인인지 아닌지 확인
	const { path } = usePathname();
	const main = path !== 'main';

	const { id, title, status, status_label, picUsername, thumbnail, star } =
		data;

	// 이미지 없을 경우
	const imgSrc = !thumbnail ? '/assets/images/noImage.png' : thumbnail;

	// 별점 계산
	const rate = [];

	for (let i = 0; i < 5; i++) {
		if (star > i) rate.push(<img src="/assets/icons/star-color.svg" />);
		else rate.push(<img src="/assets/icons/star.svg" />);
	}

	return (
		<S.Card $main={main}>
			<Link to={LINK.REVIEW_POST + `/${id}`}>
				<div>
					{imgSrc.includes('mp4') && <video src={imgSrc} />}
					{!imgSrc.includes('mp4') && <img src={imgSrc} />}
				</div>

				<S.MainBox>
					<S.Title $main={main}>
						<div>{title}</div>
						<Progress variant={status}>{status_label}</Progress>
					</S.Title>

					<S.Rate>
						{(status === 'REVIEW_STATUS_03' ||
							status === 'REVIEW_STATUS_04') && (
							<S.Writer>{picUsername}</S.Writer>
						)}

						{status === 'REVIEW_STATUS_04' && (
							<S.Rate>
								<div>{rate}</div>
								{star}
							</S.Rate>
						)}
					</S.Rate>
				</S.MainBox>
			</Link>
		</S.Card>
	);
}

export default Card;
