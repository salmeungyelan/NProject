import { Link, useNavigate } from 'react-router-dom';

import * as S from './index.styles';

import Line from '../Line';
import Button from '../Button';

function PreviousPost() {
	const navigate = useNavigate();

	const handleBackBtn = () => {
		navigate(-1);
	};

	return (
		<>
			<S.NextBox>
				<S.Next>
					<span>이전</span>
					<Line size={'height2'} variant={'gray'} />
					<Link to={'/notice/detail'}>이전 게시글이 없습니다.</Link>
				</S.Next>

				<Line size={'width'} variant={'lightGray'} />

				<S.Next>
					<span>다음</span>
					<Line size={'height2'} variant={'gray'} />
					<Link to={'/notice/detail'}>다음 이용 안내 제목</Link>
				</S.Next>
			</S.NextBox>

			<S.ButtonBox>
				<div>
					<Button variant={'white'} size={'height'} onClick={handleBackBtn}>
						뒤로 가기
					</Button>
				</div>
			</S.ButtonBox>
		</>
	);
}

export default PreviousPost;
