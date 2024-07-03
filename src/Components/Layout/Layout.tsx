import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header>Header</Header>
      <main style={{ paddingInline: '240px', width: '100%', paddingTop: '48px' }}>
        <Outlet />
      </main>
    </>
  );
};
