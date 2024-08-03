import * as S from './index.styles';

function Keyword(props) {
	const { main, sub, hashtag } = props;

	return (
		<S.Body>
			{(main || sub) && (
				<S.HashTag>
					{main && main.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
					{sub && sub.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
				</S.HashTag>
			)}

			{hashtag && (
				<S.HashTag>
					{hashtag &&
						hashtag.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
				</S.HashTag>
			)}
		</S.Body>
	);
}

export default Keyword;
