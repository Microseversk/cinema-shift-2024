import { ROUTES } from '@src/utils';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { FilmPage, RootPage } from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={ROUTES.MAIN} element={<RootPage />} />
      <Route path={ROUTES.FILM_ID} element={<FilmPage />} />
      <Route path="*" element={<>404</>} />
    </Route>,
  ),
);

export const Router = () => <RouterProvider router={router} />;
