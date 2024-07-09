import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface NavLinkItemProps {
  to: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const NavLinkItem = ({ to, children, onClick }: NavLinkItemProps) => {
  return (
    <Link to={to} className={styles.link} onClick={onClick}>
      {children}
    </Link>
  );
};
