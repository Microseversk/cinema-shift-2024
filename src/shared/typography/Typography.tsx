import classNames from 'classnames';
import styles from './styles.module.scss';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p_12_regular'
  | 'p_14_regular'
  | 'p_16_regular'
  | 'p_16_medium';

type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: TypographyVariant;
  tag?: TypographyTag;
  color?: 'primary' | 'secondary' | 'tertiary' | 'invert';
};

export const Typography = <Tag extends TypographyTag = 'p'>({
  variant,
  tag = 'p',
  color = 'primary',
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;
  const classes = classNames(styles[variant], styles[color], className);

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
