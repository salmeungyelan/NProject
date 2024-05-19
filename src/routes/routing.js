import { createBrowserRouter } from 'react-router-dom';

import Layout from 'components/@common/Layout';
import Home from 'pages/Home';
import FindId from 'pages/FindId';
import FindPw from 'pages/FindPw';
import Register from 'pages/Register';
import Main from 'pages/Main';

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
