import { Layout } from '@src/Components/Layout/Layout';
import { FilmPage, RootPage } from '@src/Components/Pages';
import { ROUTES } from '@src/utils';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

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
