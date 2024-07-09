import { ROUTES } from '@src/utils';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { FilmPage, LoginPage, OrdersPage, ProfilePage, RootPage } from '../pages';
import { PrivateRoute } from './PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={ROUTES.MAIN} element={<RootPage />} />
      <Route path={ROUTES.FILM_ID} element={<FilmPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
      </Route>
      <Route path="*" element={<>404</>} />
    </Route>,
  ),
);

export const Router = () => <RouterProvider router={router} />;
