import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { includeFooterState, includeHeaderState } from 'recoil/atom/index.atom';
import useApi from 'hooks/useApi';
import { deleteCookie } from 'utils/cookie';
import LINK from 'constants/link';

import Footer from './Footer';
import Header from './Header';
import MobileHeader from './Mobile/Header';

function Layout() {
	const includeHeader = useRecoilValue(includeHeaderState);
	const includeFooter = useRecoilValue(includeFooterState);

	const navigate = useNavigate();

	const { trigger: logoutTrigger } = useApi({
		path: '/auth/logout',
		shouldFetch: false,
	});

	const handleLogout = async () => {
		try {
			await logoutTrigger({});

			deleteCookie('accessToken');
			deleteCookie('refreshToken');

			navigate(LINK.LOGIN);
		} catch (error) {
			console.error('로그아웃 실패', error);
		}
	};

	return (
		<>
			{includeHeader && <Header logout={handleLogout} />}
			{includeHeader && <MobileHeader logout={handleLogout} />}
			<Outlet />
			{includeFooter && <Footer />}
		</>
	);
}

export default Layout;

// const logout = async () => {
// 	await getApi('/auth/logout');
// };

// const mutation = useMutation({
// 	mutationFn: logout,
// 	onSuccess: () => {
// 		deleteCookie('accessToken');
// 		deleteCookie('refreshToken');
// 		navigate('/');
// 	},
// 	onError: error => {
// 		console.error('로그아웃 실패', error);
// 	},
// });

// handleLogout
// await mutation.mutate();
