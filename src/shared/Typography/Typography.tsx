import classNames from 'classnames';

import styles from './styles.module.scss';

interface TypographyProps extends React.ComponentPropsWithoutRef<'p'> {
  variant?: 'h1' | 'h2' | 'h3' | 'p';
  size?: 'xs' | 'sm' | 'md';
  weight?: 'thin' | 'normal' | 'semibold' | 'bold';
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

  return (
    <>
      {variant.startsWith('h') ? (
        <h1 className={typographyClasses} {...props}>
          {props.children}
        </h1>
      ) : (
        <span className={typographyClasses} {...props}>
          {props.children}
        </span>
      )}
    </>
  );
};
