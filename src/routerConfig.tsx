import App from './App';
import ErrorPage from './pages/ErrorPage';
import Main from './pages/Main';
import Page404 from './pages/Page404';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';

export default [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: 'main',
        element: <Main />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];
