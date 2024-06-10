import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/@common/Layout';
import ErrorFallback from 'components/@common/Error';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const FindId = lazy(() => import('pages/FindId'));
const FindPw = lazy(() => import('pages/FindPw'));
const Main = lazy(() => import('pages/Main'));
const Guide = lazy(() => import('pages/Guide'));
const GuideDetail = lazy(() => import('pages/Guide/Detail'));
const Notice = lazy(() => import('pages/Notice'));

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
		path: '/error',
		element: <ErrorFallback />,
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
			{
				path: '/user_guide/detail',
				element: <GuideDetail />,
			},
			{
				path: '/notice',
				element: <Notice />,
			},
		],
	},
]);

export default router;
