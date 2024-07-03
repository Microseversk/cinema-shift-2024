import classNames from 'classnames';
import styles from './styles.module.scss';
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  isError?: boolean;
  lines?: number;
}
export const Input = ({ isError, lines = 1, ...props }: InputProps) => {
  const inputClasses = classNames(styles['input'], { [styles['input_error']]: isError }, props.className);

  if (lines > 1) {
    return (
      <textarea className={inputClasses} rows={lines} {...(props as React.ComponentPropsWithoutRef<'textarea'>)} />
    );
  }
  return <input className={inputClasses} {...props} />;
};
