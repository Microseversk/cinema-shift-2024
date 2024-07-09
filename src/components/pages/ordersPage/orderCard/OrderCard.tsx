import { CinemaOrder } from '@src/@types/api';
import { useGetFilmByIdQuery } from '@src/hooks';
import { usePutOrderCancelQuery } from '@src/hooks/usePutOrderCancelQuery';
import { Button, Chips, Typography } from '@src/shared';
import { QuestionIcon } from '@src/shared/icons/QuestionIcon';
import { Modal } from '@src/shared/modal/Modal';
import classNames from 'classnames';
import { useState } from 'react';
import styles from './styles.module.scss';

interface OrderCardProps {
  order: CinemaOrder;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  // TODO: Убрать, когда в заказах будет прилетать название фильма
  const { data } = useGetFilmByIdQuery(order.tickets[0].filmId);
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate, isPending } = usePutOrderCancelQuery();

  const places = Object.entries(
    order.tickets
      .slice()
      .sort((a, b) => a.row - b.row)
      .reduce((acc: { [key: number]: number[] }, item) => {
        if (!acc[item.row]) {
          acc[item.row] = [];
        }
        acc[item.row].push(item.column);
        return acc;
      }, []),
  );

  console.log(order);

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
          {places.map(([row, columns], index) => (
            <Typography variant="p_14_regular" key={index}>
              {row} ряд - {columns.sort((a, b) => a - b).join(', ')}{' '}
              {columns.length > 1 ? 'места' : 'место'}
            </Typography>
          ))}
        </div>
        <div className={styles.footer}>
          <Chips
            size="large"
            className={classNames({
              [styles.chips_green]: order.status === 'PAYED',
              [styles.chips_red]: order.status === 'CANCELED',
            })}
          >
            {order.status === 'PAYED' ? 'Оплачен' : 'Отменено'}
          </Chips>
          <Typography variant="p_14_regular" color="tertiary">
            Код билета {order.orderNumber}
          </Typography>
        </div>
        <Button
          variant="outlined"
          fullWidth
          className={styles.button}
          onClick={() => setIsDeleting(true)}
        >
          Вернуть билет
        </Button>
      </div>
    </>
  );
};
