import { CinemaOrder } from '@src/@types/api';
import { Button, Chips, Typography } from '@src/shared';
import { QuestionIcon } from '@src/shared/icons/QuestionIcon';
import { Modal } from '@src/shared/modal/Modal';
import { useGetFilmByIdQuery } from '@src/utils/api/hooks/useGetFilmByIdQuery';
import { usePutOrderCancelQuery } from '@src/utils/api/hooks/usePutOrderCancelQuery';
import { groupTicketsPlaces } from '@src/utils/helpers/groupTicketsPlaces';
import { useState } from 'react';
import styles from './styles.module.scss';

interface OrderCardProps {
  order: CinemaOrder;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  // TODO: Убрать, когда в заказах будет прилетать название фильма
  const { data } = useGetFilmByIdQuery(order.tickets[0].filmId || '');
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate, isPending } = usePutOrderCancelQuery();

  if (order.status === 'CANCELED') {
    return (
      <div className={styles.card}>
        <div className={styles.footer}>
          <Chips size="large" className={styles.chips_red}>
            Отменено
          </Chips>
          <Typography variant="p_14_regular" color="tertiary">
            Код билета {order.orderNumber}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <>
      <Modal isOpen={isDeleting} onClose={() => setIsDeleting(false)}>
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
              onClick={() =>
                mutate(
                  {
                    params: { orderId: order._id },
                  },
                  { onSuccess: () => setIsDeleting(false) },
                )
              }
            >
              Вернуть
            </Button>
            <Button fullWidth onClick={() => setIsDeleting(false)}>
              Отменить
            </Button>
          </div>
        </div>
      </Modal>
      <div className={styles.card}>
        <div className={styles.header}>
          <Typography variant="p_14_regular" color="tertiary">
            {order.tickets[0].seance.date}
          </Typography>
          <Typography variant="p_14_regular" color="tertiary">
            {order.tickets[0].seance.time}
          </Typography>
        </div>
        <div className={styles.main}>
          <Typography tag="h3" variant="h3">
            {data?.name}
          </Typography>
          {groupTicketsPlaces(order.tickets).map(([row, columns], index) => (
            <Typography variant="p_14_regular" key={index}>
              {row} ряд - {columns.sort((a, b) => a - b).join(', ')} {columns.length > 1 ? 'места' : 'место'}
            </Typography>
          ))}
        </div>
        <div className={styles.footer}>
          <Chips size="large" className={styles.chips_green}>
            Оплачено
          </Chips>
          <Typography variant="p_14_regular" color="tertiary">
            Код билета {order.orderNumber}
          </Typography>
        </div>
        <Button variant="outlined" fullWidth className={styles.button} onClick={() => setIsDeleting(true)}>
          Вернуть билет
        </Button>
      </div>
    </>
  );
};
