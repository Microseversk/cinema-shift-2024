import { Cinema, Exit, Ticket, Typography, User } from '@src/shared';

import styles from './styles.module.scss';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = ({ ...props }: HeaderProps) => (
  <header className={styles.header} {...props}>
    <nav className={styles.nav}>
      <li>
        <Cinema />
      </li>
      <li>
        <User />
        <Typography variant="p_16_medium" color="secondary">
          Профиль
        </Typography>
      </li>
      <li>
        <Ticket />
        <Typography variant="p_16_medium" color="secondary">
          Билеты
        </Typography>
      </li>
      <li>
        <Exit />
        <Typography variant="p_16_medium" color="secondary">
          Выйти
        </Typography>
      </li>
    </nav>
  </header>
);
