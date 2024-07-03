import classNames from 'classnames';

import styles from './styles.module.scss';

interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  required?: boolean;
  text: string;
}

export const Label = ({ text, required, ...props }: LabelProps) => {
  const labelClasses = classNames(props.className);

  return (
    <label {...props} className={labelClasses}>
      {text}
      {required && <span className={styles['required_star']}>*</span>}
    </label>
  );
};
