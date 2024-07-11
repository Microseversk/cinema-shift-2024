import { useMediaQuery } from '@siberiacancode/reactuse';
import { Button, Typography } from '@src/shared';
import { BottomSheet } from '@src/shared/bottomSheet/BottomSheet';
import { QuestionIcon } from '@src/shared/icons/QuestionIcon';
import { Modal, ModalProps } from '@src/shared/modal/Modal';
import { usePutOrderCancelQuery } from '@src/utils/api/hooks/usePutOrderCancelQuery';
import styles from './styles.module.scss';

interface ReturnOrderModalProps extends ModalProps {
  orderId: string;
}

export const ReturnOrderModal = ({ isOpen, orderId, onClose }: ReturnOrderModalProps) => {
  const { mutate, isPending } = usePutOrderCancelQuery();
  const mobile = useMediaQuery('(max-width:425px)');

  if (mobile) {
    return (
      <BottomSheet isOpen={isOpen} onClose={onClose}>
        <div className={styles.deleting_bs}>
          <QuestionIcon />
          <Typography tag="h3" variant="h3">
            Вернуть билет?
          </Typography>
          <div className={styles.btn_wrapper}>
            <Button
              fullWidth
              variant="outlined"
              loading={isPending}
              onClick={() => {
                mutate({ params: { orderId: orderId } }, { onSuccess: () => onClose() });
              }}
            >
              Вернуть
            </Button>
            <Button fullWidth onClick={onClose}>
              Отменить
            </Button>
          </div>
        </div>
      </BottomSheet>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.deleting_modal}>
        <QuestionIcon />
        <Typography tag="h3" variant="h3">
          Вернуть билет?
        </Typography>
        <div className={styles.btn_wrapper}>
          <Button
            fullWidth
            variant="outlined"
            loading={isPending}
            onClick={() => {
              mutate({ params: { orderId: orderId } }, { onSuccess: () => onClose() });
            }}
          >
            Вернуть
          </Button>
          <Button fullWidth onClick={onClose}>
            Отменить
          </Button>
        </div>
      </div>
    </Modal>
  );
};
