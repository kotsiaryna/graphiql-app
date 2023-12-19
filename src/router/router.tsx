import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { ErrorPage } from '../pages/ErrorPage';
import { Main } from '../pages/Main';
import { Page404 } from '../pages/Page404';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { Welcome } from '../pages/Welcome';
import { Path } from './types';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Path.Welcome,
        element: <Welcome />,
      },
      {
        path: Path.Main,
        element: <Main />,
      },
      {
        path: Path.SignIn,
        element: <SignIn />,
      },
      {
        path: Path.SignUp,
        element: <SignUp />,
      },
      {
        path: Path.Page404,
        element: <Page404 />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
