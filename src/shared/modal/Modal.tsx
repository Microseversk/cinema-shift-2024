import ReactDOM from 'react-dom';
import styles from './styles.module.scss';

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={onClose}></div>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
};
