import classNames from 'classnames';

import { useId } from 'react';
import styles from './styles.module.scss';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  isError?: boolean;
  id?: string;
  label?: string;
  message?: string;
}

export const Input = ({ isError, label, message, className, id, ...props }: InputProps) => {
  const _id = useId();
  const inputClasses = classNames(styles.input, { [styles.input_error]: isError }, className);
  const messageClasses = classNames(styles.message, { [styles.message_error]: isError && message });

  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={id || _id}>
          {label}
        </label>
      )}
      <input className={inputClasses} id={id || _id} {...props} />
      {message && <p className={messageClasses}>{message}</p>}
    </div>
  );
};
