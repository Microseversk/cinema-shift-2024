import classNames from 'classnames';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from '../modal/Modal';
import styles from './styles.module.scss';

interface BottomSheetProps extends ModalProps {}

export const BottomSheet = ({ isOpen, onClose, children, className }: BottomSheetProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const classes = classNames(
    styles.bottom_sheet,
    {
      [styles.hide]: isClosing,
      [styles.active]: isOpen && !isClosing,
    },
    className,
  );

  const onAnimatedClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onAnimatedClose}>
      <div className={classes} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};
