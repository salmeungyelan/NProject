import * as S from './index.styles';

import Button from '../Button';

function NoPost(props) {
	const { children, review } = props;

	return (
		<S.NoPost>
			<span>{children}</span>
			{review && (
				<Button variant="default" size="height">
					등록하기
				</Button>
			)}
		</S.NoPost>
	);
}

export default NoPost;
