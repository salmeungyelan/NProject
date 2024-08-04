import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorFallback from 'components/@common/Error';

import ProtectedRoute from './protectedRoute';

const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const FindAccounts = lazy(() => import('pages/FindAccounts'));

const Home = lazy(() => import('pages/Home'));
const MyPage = lazy(() => import('pages/MyPage'));

const Guide = lazy(() => import('pages/Guide'));
const GuideDetail = lazy(() => import('pages/Guide/GuideDetail'));

const Notice = lazy(() => import('pages/Notice'));
const NoticeDetail = lazy(() => import('pages/Notice/NoticeDetail'));

const Review = lazy(() => import('pages/Review'));
const ReviewPost = lazy(() => import('pages/Review/ReviewPost'));
const ReviewApply = lazy(() => import('pages/Review/ReviewApply'));

const VisitExperience = lazy(() => import('pages/VisitExperience'));
const WebsiteOutsourcing = lazy(() => import('pages/WebsiteOutsourcing'));
const ViewTabInstagram = lazy(() => import('pages/ViewTabInsta'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
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
		path: '',
		element: <ProtectedRoute />,
		children: [
			{
				path: '/main',
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
				path: '/mypage',
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
				path: '/visit-experience',
				element: <VisitExperience />,
			},
			{
				path: '/viewtab-instagram',
				element: <ViewTabInstagram />,
			},
			{
				path: '/website-outsourcing',
				element: <WebsiteOutsourcing />,
			},
		],
	},
]);

export default router;
