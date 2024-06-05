import * as S from './index.styles';

import Progress from '../Progress';

function Card() {
	return (
		<S.Card>
			<div>
				<img src="/assets/images/example.png" />
			</div>

			<S.MainBox>
				<S.Title>
					<div>리뷰 제목</div>
					<Progress variant={'ing'}>진행중</Progress>
				</S.Title>

				<S.Writer>작성자</S.Writer>
			</S.MainBox>
		</S.Card>
	);
}

export default Card;
