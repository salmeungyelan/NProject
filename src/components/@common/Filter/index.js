import * as S from './index.styles';

function Filter() {
	return (
		<S.Body>
			<S.Sort>
				<span>•</span>최신순
			</S.Sort>

			<S.Sort>
				<span>•</span>오래된순
			</S.Sort>
		</S.Body>
	);
}

export default Filter;
