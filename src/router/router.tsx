import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { Layout } from '../components/Layout/Layout';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { Main } from '../pages/main/Main';
import { Page404 } from '../pages/Page404/Page404';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { Welcome } from '../pages/Welcome/Welcome';
import { Path } from './types';
import { auth } from '../firebase';

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
        loader: () => {
          const user = auth.currentUser;
          if (!user) return redirect(Path.Welcome);
          return null;
        },
      },
      {
        path: Path.SignIn,
        element: <SignIn />,
        loader: async () => {
          const user = await new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (data) => {
              unsubscribe();
              resolve(data);
            });
          });

          if (user) return redirect(Path.Main);
          return null;
        },
      },
      {
        path: Path.SignUp,
        element: <SignUp />,
        loader: async () => {
          const user = await new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (data) => {
              unsubscribe();
              resolve(data);
            });
          });

          if (user) return redirect(Path.Main);
          return null;
        },
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
