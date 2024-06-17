import { Link } from 'react-router-dom';

import * as S from './index.styles';
import LINK from 'constants/link';

function Iphone() {
	return (
		<S.Iphone>
			<Link to={LINK.REVIEW_POST + '/:_id'}>
				<S.ImgBox>
					<S.Circle />
					<img src="/assets/images/example.png" />
				</S.ImgBox>

				<S.MainBox>
					<S.Title>
						<div>리뷰 제목</div>
						<S.CheckProgress>진행중</S.CheckProgress>
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
		</S.Iphone>
	);
}

export default Iphone;
