import classNames from 'classnames';
import styles from './styles.module.scss';

interface TypographyProps extends React.ComponentPropsWithoutRef<'p'> {
  variant?: 'h1' | 'h2' | 'h3' | 'p';
  size?: 'xs' | 'sm' | 'md';
  weight?: 'normal' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary' | 'invert';
}

export const Typography = ({ variant = 'p', color = 'primary', size, weight, ...props }: TypographyProps) => {
  const typographyClasses = classNames(
    {
      [styles[`${variant}`]]: variant,
      [styles[`${size}`]]: size,
      [styles[`${weight}`]]: weight,
      [styles[`${color}`]]: color,
    },
    props.className,
  );
  if (variant.startsWith('h')) {
    return (
      <h1 className={typographyClasses} {...props}>
        {props.children}
      </h1>
    );
  }
  return (
    <p className={typographyClasses} {...props}>
      {props.children}
    </p>
  );
};
