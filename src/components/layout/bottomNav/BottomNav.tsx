import { MovieIcon, Ticket, Typography, User } from '@src/shared';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { useLocation } from 'react-router-dom';
import { NavLinkItem } from '../header/navLinkItem/NavLinkItem';
import styles from './styles.module.scss';

export const BottomNav = () => {
  const { pathname } = useLocation();
  return (
    <footer className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <NavLinkItem
            to={NAVIGATE_ROUTES.ROOT_PAGE}
            active={pathname === NAVIGATE_ROUTES.ROOT_PAGE}
            className={styles.nav_link}
          >
            <MovieIcon />
            <Typography variant="p_12_regular" color="tertiary">
              Афиша
            </Typography>
          </NavLinkItem>
        </li>
        <li>
          <NavLinkItem
            to={NAVIGATE_ROUTES.ORDERS_PAGE}
            active={pathname === NAVIGATE_ROUTES.ORDERS_PAGE}
            className={styles.nav_link}
          >
            <Ticket />
            <Typography variant="p_12_regular" color="tertiary">
              Билеты
            </Typography>
          </NavLinkItem>
        </li>
        <li>
          <NavLinkItem
            to={NAVIGATE_ROUTES.PROFILE_PAGE}
            active={pathname === NAVIGATE_ROUTES.PROFILE_PAGE}
            className={styles.nav_link}
          >
            <User />
            <Typography variant="p_12_regular" color="tertiary">
              Профиль
            </Typography>
          </NavLinkItem>
        </li>
      </ul>
    </footer>
  );
};
