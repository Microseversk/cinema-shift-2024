import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ROUTES } from '../../utils';
import { Layout } from '../Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={ROUTES.MAIN} element={<>Root page</>} />
    </Route>,
  ),
);

export const Router = () => <RouterProvider router={router} />;
