import * as S from './index.styles';

const hashTag = [
	'#요가',
	'#필라테스',
	'#황올필테',
	'#황금올리브필라테스',
	'#김지황',
	'#엄재현',
	'#조아연',
	'#최은채',
	'#끝내자',
	'#해시태그20개',
	'#프로젝트',
	'#6월에',
	'#끝나겠지',
	'#끝나야댐',
	'#20개채우기',
	'#프로젝트',
	'#이미지15개',
	'#너무많다',
	'#다햇는데',
	'#20개안올리면쥬기겟다',
];

const keyWord = ['필라테스', '요가', '기구 필라테스', '필테'];

function Keyword() {
	return (
		<S.Body>
			<S.HashTag>
				<S.Word>황올 필라테스</S.Word>
				{keyWord.map((tag, idx) => (
					<S.Word key={idx}>{tag}</S.Word>
				))}
			</S.HashTag>

			<S.HashTag>
				{hashTag.map((tag, idx) => (
					<S.Word key={idx}>{tag}</S.Word>
				))}
			</S.HashTag>
		</S.Body>
	);
}

export default Keyword;
