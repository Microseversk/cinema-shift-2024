import { authContext } from '@src/store/authContext/authContext';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const { user } = useContext(authContext);
  return <>{user ? <Outlet /> : <Navigate to={NAVIGATE_ROUTES.LOGIN_PAGE} />}</>;
};
