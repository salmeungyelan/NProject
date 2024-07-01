import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/@common/Layout';
import ErrorFallback from 'components/@common/Error';

const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const FindAccounts = lazy(() => import('pages/FindAccounts'));

const Home = lazy(() => import('pages/Home'));

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
		element: <Login />,
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
				element: <Home />,
			},
			{
				path: '/guide',
				element: <Guide />,
			},
			{
				path: '/guide/post/:_id',
				element: <GuideDetail />,
			},
			{
				path: '/notice',
				element: <Notice />,
			},
			{
				path: '/notice/post/:_id',
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
				path: '/review/apply/:_id',
				element: <ReviewApply />,
			},
			{
				path: '/visit_experience',
				element: <OtherTabs />,
			},
			{
				path: '/viewtab_instagram',
				element: <OtherTabs />,
			},
			{
				path: '/website_outsourcing',
				element: <OtherTabs />,
			},
		],
	},
]);

export default router;
