import { Cinema, Exit, Ticket, Typography, User } from '@src/shared';

import { authContext } from '@src/store/authContext/authContext';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { useContext } from 'react';
import { NavLinkItem } from './navLinkItem/NavLinkItem';
import styles from './styles.module.scss';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = ({ ...props }: HeaderProps) => {
  const { user, setUser } = useContext(authContext);

  const handleLogout = () => {
    setUser(undefined);
    window.localStorage.removeItem('token');
  };

  return (
    <header className={styles.header} {...props}>
      <nav className={styles.nav}>
        <li>
          <NavLinkItem to={NAVIGATE_ROUTES.ROOT_PAGE}>
            <Cinema />
          </NavLinkItem>
        </li>
        {user?.phone && (
          <>
            <li>
              <NavLinkItem to={NAVIGATE_ROUTES.PROFILE_PAGE}>
                <User />
                <Typography variant="p_16_medium" color="secondary">
                  Профиль
                </Typography>
              </NavLinkItem>
            </li>
            <li>
              <NavLinkItem to={NAVIGATE_ROUTES.TICKETS_PAGE}>
                <Ticket />
                <Typography variant="p_16_medium" color="secondary">
                  Билеты
                </Typography>
              </NavLinkItem>
            </li>
          </>
        )}
        {user ? (
          <li>
            <NavLinkItem to={NAVIGATE_ROUTES.LOGIN_PAGE} onClick={handleLogout}>
              <Exit />
              <Typography variant="p_16_medium" color="secondary">
                Выйти
              </Typography>
            </NavLinkItem>
          </li>
        ) : (
          <li>
            <NavLinkItem to={NAVIGATE_ROUTES.LOGIN_PAGE}>
              <Exit />
              <Typography variant="p_16_medium" color="secondary">
                Войти
              </Typography>
            </NavLinkItem>
          </li>
        )}
      </nav>
    </header>
  );
};
