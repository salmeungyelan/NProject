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
				<Button size="height" scale variant="default" onClick={onClick}>
					검색
				</Button>
			</S.ButtonBox>

			<S.ResetBox>
				<S.Button onClick={reset}>
					<svg
						id="Layer_1"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						viewBox="0 0 13.03 12.38"
					>
						<defs></defs>
						<path
							className="cls-1"
							d="M3.31,4.15h-1.56C2.83,1.6,5.75.34,8.35,1.34c1.52.58,2.69,1.87,3.13,3.44l.03.12.96-.27-.03-.12c-.44-1.59-1.47-2.91-2.91-3.72C8.1-.01,6.44-.21,4.85.23c-1.67.47-3.07,1.63-3.85,3.16v-1.55H0v3.31h3.31v-1Z"
						/>
						<path
							className="cls-1"
							d="M9.72,6.82v1h1.67c-.87,2.64-3.69,4.13-6.38,3.34-1.84-.54-3.22-2.05-3.61-3.92l-.03-.12-.98.2.02.12c.33,1.62,1.27,3.01,2.65,3.92,1.02.67,2.19,1.02,3.39,1.02.42,0,.84-.04,1.26-.13,1.89-.39,3.46-1.61,4.3-3.31v1.19h1v-3.31h-3.31Z"
						/>
					</svg>
					초기화
				</S.Button>
			</S.ResetBox>
		</S.Body>
	);
}

export default Search;
