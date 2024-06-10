import * as S from './index.styles';

import Button from '../Button';

function Search() {
	return (
		<S.Body>
			<S.SearchBox>
				<img src="/assets/icons/search.svg" />
				<S.Input placeholder="검색어를 입력해 주세요." />
			</S.SearchBox>

			<S.ButtonBox>
				<Button variant={'default'} size={'height'}>
					검색
				</Button>
			</S.ButtonBox>

			<S.ResetBox>
				<S.Button>
					<img src="/assets/icons/reset.svg" />
					초기화
				</S.Button>
			</S.ResetBox>
		</S.Body>
	);
}

export default Search;
