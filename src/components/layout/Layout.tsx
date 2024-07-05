import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import styles from './styles.module.scss';

export const Layout = () => (
  <>
    <Header />
    <main className={styles.wrapper}>
      <Outlet />
    </main>
  </>
);
