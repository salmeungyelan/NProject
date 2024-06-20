import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/@common/Layout';
import ErrorFallback from 'components/@common/Error';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const FindAccounts = lazy(() => import('pages/FindAccounts'));

const Main = lazy(() => import('pages/Main'));

const Guide = lazy(() => import('pages/Guide'));
const GuideDetail = lazy(() => import('pages/Guide/GuideDetail'));

const Notice = lazy(() => import('pages/Notice'));
const NoticeDetail = lazy(() => import('pages/Notice/NoticeDetail'));

const MyPage = lazy(() => import('pages/MyPage'));

const Review = lazy(() => import('pages/Review'));
const ReviewPost = lazy(() => import('pages/Review/ReviewPost'));
const ReviewApply = lazy(() => import('pages/Review/ReviewApply'));

const OtherTabs = lazy(() => import('pages/OtherTabs'));

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Home />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/find/id',
		element: <FindAccounts />,
	},
	{
		path: '/find/password',
		element: <FindAccounts />,
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
				path: '/',
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
			{
				path: '/review_team',
				element: <OtherTabs />,
			},
			{
				path: '/view_instagram',
				element: <OtherTabs />,
			},
			{
				path: '/web_creation',
				element: <OtherTabs />,
			},
		],
	},
]);

export default router;
