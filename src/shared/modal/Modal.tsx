import classNames from 'classnames';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Modal = ({ children, isOpen, onClose, className }: ModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={classNames(styles.modal, className)} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={onClose}></div>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
};
