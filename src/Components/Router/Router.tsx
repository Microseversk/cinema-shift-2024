import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ROUTES } from '../../utils';
import { Layout } from '../Layout/Layout';
import { RootPage } from '../Pages';
import { FilmPage } from '../Pages/FIlmPage/FilmPage';

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
