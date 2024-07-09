import classNames from 'classnames';
import styles from './styles.module.scss';

interface ChipsProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children?: React.ReactNode;
  color?: 'gray' | 'red' | 'green' | 'blue';
}

export const Chips = ({ children, className, color = 'gray', size = 'medium' }: ChipsProps) => {
  const classes = classNames(styles.chips, styles[size], styles[color], className);

  return <div className={classes}>{children}</div>;
};
