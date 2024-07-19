import { useNavigate } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

import Button from '../Button';

function NoPost(props) {
	const { children, review } = props;

	const navigate = useNavigate();

	const handleClickApply = () => {
		navigate(LINK.REVIEW_APPLY);
	};

	return (
		<S.NoPost>
			<span>{children}</span>

			{review && (
				<Button size="height" variant="default" onClick={handleClickApply}>
					등록하기
				</Button>
			)}
		</S.NoPost>
	);
}

export default NoPost;
