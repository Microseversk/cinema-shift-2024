import classNames from 'classnames';
import styles from './styles.module.scss';
interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  required?: boolean;
  text: string;
}

const Label = ({ text, required, ...props }: LabelProps) => {
  const labelClasses = classNames(props.className);
  return (
    <label {...props} className={labelClasses}>
      {text}
      <span className={styles['required_star']}>{required ? '*' : ''}</span>
    </label>
  );
};

export default Label;
