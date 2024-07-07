import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import decodeJWT from 'utils/token';
import { deleteCookie } from 'utils/cookie';
import LINK from 'constants/link';

import Footer from './Footer';
import Header from './Header';
import MobileHeader from './Mobile/Header';
import { otherTabsState } from 'recoil/atom/otherTabs.atom';

function Layout() {
	const decodedPayload = decodeJWT();
	const { companyName } = decodedPayload;

	const navigate = useNavigate();
	const [otherTab, setOtherTab] = useRecoilState(otherTabsState);

	const handleLogout = () => {
		deleteCookie('accessToken');
		deleteCookie('refreshToken');
		setOtherTab({});
		navigate(LINK.LOGIN);
	};

	return (
		<>
			<Header logout={handleLogout} name={companyName} />

			<MobileHeader logout={handleLogout} name={companyName} />

			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
