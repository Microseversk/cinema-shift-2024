import { useMediaQuery } from '@siberiacancode/reactuse';
import { Outlet } from 'react-router-dom';
import { BottomNav } from './bottomNav/BottomNav';
import { Header } from './header/Header';
import styles from './styles.module.scss';

export const Layout = () => {
  const mobile = useMediaQuery('(max-width:425px)');
  return (
    <>
      {!mobile && <Header />}
      <main className={styles.wrapper}>
        <Outlet />
      </main>
      {mobile && <BottomNav />}
    </>
  );
};
