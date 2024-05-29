import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('components/@common/Layout'));

// Home = Login
const Home = lazy(() => import('pages/Home'));

// Find ID & PW
const FindId = lazy(() => import('pages/FindId'));
const FindPw = lazy(() => import('pages/FindPw'));

// Register
const Register = lazy(() => import('pages/Register'));

// Main
const Main = lazy(() => import('pages/Main'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/find/id',
				element: <FindId />,
			},
			{
				path: '/find/password',
				element: <FindPw />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/main',
				element: <Main />,
			},
		],
	},
]);

export default router;
