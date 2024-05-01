import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/@common/Layout/index';
import Home from '../pages/Home/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export default router;
