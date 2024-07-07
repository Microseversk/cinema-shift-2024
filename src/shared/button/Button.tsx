import classNames from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'contained' | 'outlined' | 'link' | 'text';
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({ variant = 'contained', loading, fullWidth, className, ...props }: ButtonProps) => {
  const classes = classNames(
    styles.button,
    styles[variant],
    {
      [styles.loading]: loading,
      [styles.full_width]: fullWidth,
    },
    className,
  );

  return (
    <button disabled={props.disabled} className={classes} type={props.type || 'button'} {...props}>
      <span>{props.children}</span>
      {loading && <span />}
    </button>
  );
};
