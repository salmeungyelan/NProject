import * as S from './index.styles';

import Button from '../Button';

function Search(props) {
	const { onClick, onChange, search, reset } = props;

	return (
		<S.Body>
			<S.SearchBox>
				<img src="/assets/icons/search.svg" />
				<S.Input
					name="search"
					placeholder="검색어를 입력해 주세요."
					onChange={onChange}
					value={search}
				/>
			</S.SearchBox>

			<S.ButtonBox>
				<Button variant={'default'} size={'height'} onClick={onClick}>
					검색
				</Button>
			</S.ButtonBox>

			<S.ResetBox>
				<S.Button onClick={reset}>
					<img src="/assets/icons/reset.svg" />
					초기화
				</S.Button>
			</S.ResetBox>
		</S.Body>
	);
}

export default Search;
