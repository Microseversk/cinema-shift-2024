import classNames from 'classnames';
import styles from './styles.module.scss';

interface NavItemProps extends React.ComponentPropsWithoutRef<'li'> {
  icon?: string;
  alt?: string;
}

export const NavItem = ({ icon, alt, ...props }: NavItemProps) => {
  const navItemClasses = classNames(styles.li, props.className);
  return (
    <li className={navItemClasses} {...props}>
      <img src={icon} alt={alt} width={24} height={24} />
      {props.children}
    </li>
  );
};
