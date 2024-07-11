import classNames from 'classnames';
import styles from './styles.module.scss';

interface BackProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Back = ({ children, icon, className, onClick }: BackProps) => {
  return (
    <div className={classNames(styles.wrapper, className)} onClick={onClick}>
      {icon}
      {children}
    </div>
  );
};
