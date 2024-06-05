import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/@common/Layout';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const FindId = lazy(() => import('pages/FindId'));
const FindPw = lazy(() => import('pages/FindPw'));
const Main = lazy(() => import('pages/Main'));
const Guide = lazy(() => import('pages/Guide'));

const router = createBrowserRouter([
	{
		path: '',
		element: <Home />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/find_id',
		element: <FindId />,
	},
	{
		path: '/find_password',
		element: <FindPw />,
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/main',
				element: <Main />,
			},
			{
				path: '/user_guide',
				element: <Guide />,
			},
		],
	},
]);

export default router;
