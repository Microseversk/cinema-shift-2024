import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<>Root page</>} />
    </Route>,
  ),
);

export const Router = () => <RouterProvider router={router} />;
