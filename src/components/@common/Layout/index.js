import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { includeFooterState, includeHeaderState } from 'recoil/atom/index.atom';
import decodeJWT from 'utils/token';
import { deleteCookie } from 'utils/cookie';
import LINK from 'constants/link';

import Footer from './Footer';
import Header from './Header';
import MobileHeader from './Mobile/Header';

function Layout() {
	const includeHeader = useRecoilValue(includeHeaderState);
	const includeFooter = useRecoilValue(includeFooterState);

	const decodedPayload = decodeJWT();
	const { companyName } = decodedPayload;

	const navigate = useNavigate();

	const handleLogout = () => {
		deleteCookie('accessToken');
		deleteCookie('refreshToken');

		navigate(LINK.LOGIN);
	};

	return (
		<>
			{includeHeader && <Header logout={handleLogout} name={companyName} />}
			{includeHeader && (
				<MobileHeader logout={handleLogout} name={companyName} />
			)}
			<Outlet />
			{includeFooter && <Footer />}
		</>
	);
}

export default Layout;
