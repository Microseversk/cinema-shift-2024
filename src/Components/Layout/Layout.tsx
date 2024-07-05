import { Header } from '@src/Components/Layout/header/Header';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

export const Layout = () => (
  <>
    <Header />
    <main className={styles.wrapper}>
      <Outlet />
    </main>
  </>
);
