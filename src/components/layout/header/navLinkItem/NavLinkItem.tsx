import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface NavLinkItemProps {
  to: string;
  children?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export const NavLinkItem = ({ to, children, active, className, onClick }: NavLinkItemProps) => {
  const classes = classNames(styles.link, { [styles.active]: active }, className);

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
};
