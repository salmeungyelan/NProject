import { Link } from 'react-router-dom';

import useLayout from 'hooks/useLayout';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import PwLookup from 'components/pages/FindPw/PwLookup';
import NewPw from 'components/pages/FindPw/NewPw';
import Modal from 'components/@common/Modal';

function FindPw() {
	useLayout();

	return (
		<S.Body>
			<S.Top>
				<S.LogoBox>
					<Link to="/">
						<Logo size={'default'} />
					</Link>
				</S.LogoBox>

				<NewPw />
				{/* <PwLookup /> */}
				<Modal />
			</S.Top>

			<S.Bottom>
				<img src="/assets/images/pw-bottom-img.png" />
			</S.Bottom>
		</S.Body>
	);
}

export default FindPw;
