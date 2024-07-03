import classNames from 'classnames';
import styles from './styles.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'contained' | 'outlined' | 'link' | 'text';
  theme?: 'primary' | 'secondary';
}

const Button = ({ variant = 'contained', theme = 'primary', ...props }: ButtonProps) => {
  const buttonClasses = classNames(
    styles['button'],
    {
      [styles[`button_${variant}_${theme}`]]: variant && theme,
    },
    props.className,
  );
  return (
    <button className={buttonClasses} type={props.type || 'button'} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
