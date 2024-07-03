import { Typography } from '../../../shared';

import styles from './styles.module.scss';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <header className={styles.header} {...props}>
      <nav className={styles.nav}>
        <li>
          <img src="/icons/Cinema.svg" alt="Иконка логотипа" />
        </li>
        <li>
          <img src="/icons/User.svg" alt="Иконка профиля" />
          <Typography color="secondary">Профиль</Typography>
        </li>
        <li>
          <img src="/icons/Ticket.svg" alt="Иконка билетов" />
          <Typography color="secondary">Билеты</Typography>
        </li>
        <li>
          <img src="/icons/Exit.svg" alt="Иконка выхода" />
          <Typography color="secondary">Выйти</Typography>
        </li>
      </nav>
    </header>
  );
};
