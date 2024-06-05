import * as S from './index.styles';

import Progress from 'components/@common/Progress';

function Iphone() {
	return (
		<S.Iphone>
			<S.ImgBox>
				<img src="/assets/images/example.png" />
			</S.ImgBox>

			<S.MainBox>
				<S.Title>
					<div>리뷰 제목</div>
					<Progress variant={'ing'} shape={'big'}>
						진행중
					</Progress>
				</S.Title>

				<S.Writer>작성자</S.Writer>
			</S.MainBox>
		</S.Iphone>
	);
}

export default Iphone;
