import * as S from './index.styles';

function Header() {
	return (
		<S.Header>
			<S.TopBox>
				<div>
					<img src="" alt="logo image" />
				</div>

				<div>
					<p>
						<strong>황올컴퍼니</strong> 님 환영합니다!
					</p>
				</div>

				<div>
					<button>LOGOUT</button>
					<button>MY PAGE</button>
				</div>
			</S.TopBox>

			<div></div>
		</S.Header>
	);
}

export default Header;
