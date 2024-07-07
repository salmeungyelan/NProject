import { Link } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

function Iphone({ data }) {
	const { id, title, status, status_label, adminname, thumbnail, star } = data;

	// 이미지 없을 경우
	const imgSrc = !thumbnail ? '/assets/images/noImage.png' : thumbnail;

	// 별점 계산
	const rate = [];

	for (let i = 0; i < 5; i++) {
		if (star > i) rate.push(<img src="/assets/icons/star-color.svg" />);
		else rate.push(<img src="/assets/icons/star.svg" />);
	}

	return (
		<S.Iphone>
			<Link to={LINK.REVIEW_POST + `/${id}`}>
				<S.ImgBox>
					<S.Circle />
					<img src={imgSrc} />
				</S.ImgBox>

				<S.MainBox>
					<S.Title>
						<div>{title}</div>
						<S.CheckProgress $status={status}>{status_label}</S.CheckProgress>
					</S.Title>

					<S.Rate>
						{(status === 'REVIEW_STATUS_03' ||
							status === 'REVIEW_STATUS_04') && (
							<S.Writer>{adminname}</S.Writer>
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
		</S.Iphone>
	);
}

export default Iphone;
