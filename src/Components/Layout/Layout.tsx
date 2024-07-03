import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header>Header</Header>
      <main style={{ width: '960px', paddingTop: '48px' }}>
        <Outlet />
      </main>
    </>
  );
};
