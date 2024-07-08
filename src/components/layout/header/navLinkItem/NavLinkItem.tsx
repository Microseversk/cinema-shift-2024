import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface NavLinkItemProps {
  to: string;
  children?: React.ReactNode;
}

export const NavLinkItem = ({ to, children }: NavLinkItemProps) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};
