import { Cinema, Exit, Ticket, Typography, User } from '@src/shared';

import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { NavLinkItem } from './navLinkItem/NavLinkItem';
import styles from './styles.module.scss';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = ({ ...props }: HeaderProps) => (
  <header className={styles.header} {...props}>
    <nav className={styles.nav}>
      <li>
        <NavLinkItem to={NAVIGATE_ROUTES.ROOT_PAGE}>
          <Cinema />
        </NavLinkItem>
      </li>
      <li>
        <NavLinkItem to={NAVIGATE_ROUTES.ROOT_PAGE}>
          <User />
          <Typography variant="p_16_medium" color="secondary">
            Профиль
          </Typography>
        </NavLinkItem>
      </li>
      <li>
        <NavLinkItem to={NAVIGATE_ROUTES.ROOT_PAGE}>
          <Ticket />
          <Typography variant="p_16_medium" color="secondary">
            Билеты
          </Typography>
        </NavLinkItem>
      </li>
      <li>
        <NavLinkItem to={NAVIGATE_ROUTES.ROOT_PAGE}>
          <Exit />
          <Typography variant="p_16_medium" color="secondary">
            Выйти
          </Typography>
        </NavLinkItem>
      </li>
    </nav>
  </header>
);
