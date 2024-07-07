import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import usePathname from 'hooks/usePathname';

import * as S from './index.styles';

import Line from '../Line';
import Button from '../Button';

function PreviousPost(props) {
	const { prev, next, trigger } = props;

	const navigate = useNavigate();
	const { path } = usePathname();

	const params = useParams();
	const _id = params._id;

	const [backId, setBackId] = useState();

	useEffect(() => {
		setBackId(_id);
	}, [_id]);

	const handleClickPrev = id => {
		trigger({
			path: `/client/${path}s/${id}`,
			applyResult: true,
		});
	};

	const handleClickBackBtn = id => {
		navigate(-1);

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
					<Line size="height2" variant="gray" />
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

				<Line size="width" variant="lightGray" />

				<S.Next>
					<span>다음</span>
					<Line size="height2" variant="gray" />
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
			{path !== 'review' && (
				<S.ButtonBox>
					<div>
						<Button
							variant="white"
							size="height"
							onClick={() => handleClickBackBtn(backId)}
						>
							뒤로 가기
						</Button>
					</div>
				</S.ButtonBox>
			)}
		</>
	);
}

export default PreviousPost;
