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
const NoticeDetail = lazy(() => import('pages/Notice/Detail'));

const MyPage = lazy(() => import('pages/MyPage'));

const Review = lazy(() => import('pages/Review'));
const ReviewPost = lazy(() => import('pages/Review/ReviewPost'));
const ReviewApply = lazy(() => import('pages/Review/ReviewApply'));

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
				path: '/user_guide/:_id',
				element: <GuideDetail />,
			},
			{
				path: '/notice',
				element: <Notice />,
			},
			{
				path: '/notice/:_id',
				element: <NoticeDetail />,
			},
			{
				path: '/my_page',
				element: <MyPage />,
			},
			{
				path: '/review',
				element: <Review />,
			},
			{
				path: '/review/post/:_id',
				element: <ReviewPost />,
			},
			{
				path: '/review/apply',
				element: <ReviewApply />,
			},
		],
	},
]);

export default router;
