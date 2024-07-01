import { Link, useNavigate } from 'react-router-dom';

import usePathname from 'hooks/usePathname';

import * as S from './index.styles';

import Line from '../Line';

function PreviousPost(props) {
	const { prev, next, trigger } = props;

	const { path } = usePathname();

	const handleClickPrev = id => {
		trigger({
			path: `/client/${path}s/${id}`,
			applyResult: true,
		});
	};

	return (
		<>
			<S.NextBox>
				<S.Next>
					<span>이전</span>
					<Line size={'height2'} variant={'gray'} />
					{prev ? (
						<Link
							to={`/${path}/post/${prev.id}`}
							onClick={() => handleClickPrev(prev.id)}
						>
							{prev.previousTitle}
						</Link>
					) : (
						'이전 게시글이 없습니다.'
					)}
				</S.Next>

				<Line size={'width'} variant={'lightGray'} />

				<S.Next>
					<span>다음</span>
					<Line size={'height2'} variant={'gray'} />
					{next ? (
						<Link
							to={`/${path}/post/${next.id}`}
							onClick={() => handleClickPrev(next.id)}
						>
							{next.previousTitle}
						</Link>
					) : (
						'다음 게시글이 없습니다.'
					)}
				</S.Next>
			</S.NextBox>
		</>
	);
}

export default PreviousPost;
