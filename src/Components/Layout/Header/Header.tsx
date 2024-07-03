import styles from './styles.module.scss';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = ({ ...props }: HeaderProps) => {
  return <header className={styles.header} {...props}></header>;
};
