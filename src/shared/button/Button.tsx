import classNames from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'contained' | 'outlined' | 'link' | 'text';
  color?: 'primary' | 'secondary';
  loading?: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = ({ variant = 'contained', color = 'primary', fullWidth, className, ...props }: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    {
      [styles[`${variant}`]]: variant,
      [styles[`${color}`]]: color,
      [styles.full_width]: fullWidth,
    },
    className,
  );

  return (
    <button {...props} className={buttonClasses} type={props.type || 'button'}>
      {props.icon}
      {props.loading ? props.loading : props.children}
    </button>
  );
};
