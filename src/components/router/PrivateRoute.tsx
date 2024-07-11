import { authContext } from '@src/context/authContext/authContext';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const { user } = useContext(authContext);
  const token = window.localStorage.getItem('token');

  if (!token) {
    return <Navigate to={NAVIGATE_ROUTES.LOGIN_PAGE} replace />;
  }

  if (user) {
    return <Outlet />;
  }
};
