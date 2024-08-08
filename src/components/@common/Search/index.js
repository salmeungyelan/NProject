import * as S from './index.styles';

import Button from '../Button';

function Search(props) {
	const { onClick, onChange, search, reset } = props;

	const handleKeyDown = e => {
		if (e.key === 'Enter') onClick();
	};

	return (
		<S.Body>
			<S.SearchBox>
				<img src="/assets/icons/search.svg" />
				<S.Input
					name="search"
					value={search}
					type="text"
					placeholder="검색어를 입력해 주세요."
					onChange={onChange}
					onKeyDown={handleKeyDown}
				/>
			</S.SearchBox>

			<S.ButtonBox>
				<Button size="height" variant="default" onClick={onClick}>
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
