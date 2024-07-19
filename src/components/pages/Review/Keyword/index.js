import * as S from './index.styles';

function Keyword(props) {
	const { main, sub, hashTag } = props;

	return (
		<S.Body>
			<S.HashTag>
				{main && main.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
				{sub && sub.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
			</S.HashTag>

			<S.HashTag>
				{hashTag &&
					hashTag.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
			</S.HashTag>
		</S.Body>
	);
}

export default Keyword;
