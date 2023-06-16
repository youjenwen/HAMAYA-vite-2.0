import type { RouteObject } from 'react-router-dom';
import HomePage from '@Pages/homePage';
import NewsPage from '@Pages/newsPage';
import Layout from '@Components/layout';

const allRouters: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/news',
        element: <NewsPage />,
        children: []
      }
    ]
  }
];

export default allRouters;
