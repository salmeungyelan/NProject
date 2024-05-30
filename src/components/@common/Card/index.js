import * as S from './index.styles';

import Progress from '../Progress';

function Card() {
	return (
		<div>
			<div>
				<img />
			</div>

			<div>
				<div>
					<div>리뷰 제목</div>
					<Progress variant={'ing'}>진행중</Progress>
				</div>

				<S.Writer>작성자</S.Writer>
			</div>
		</div>
	);
}

export default Card;
