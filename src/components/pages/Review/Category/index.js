import * as S from './index.styles';

const position = ['전체', '블로그', '방문자', '인스타그램'];

function Category() {
	return (
		<S.Body>
			{position.map((filter, idx) => (
				<S.Category key={idx}>{filter}</S.Category>
			))}
		</S.Body>
	);
}

export default Category;
