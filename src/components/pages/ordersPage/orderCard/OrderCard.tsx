import { CinemaOrder } from '@src/@types/api';
import { Button, Chips, Typography } from '@src/shared';
import { useGetFilmByIdQuery } from '@src/utils/api/hooks/useGetFilmByIdQuery';
import { groupTicketsPlaces } from '@src/utils/helpers/groupTicketsPlaces';
import { useState } from 'react';
import { ReturnOrderModal } from './returnOrderModal/ReturnOrderModal';
import styles from './styles.module.scss';

interface OrderCardProps {
  order: CinemaOrder;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  // TODO: Убрать, когда в заказах будет прилетать название фильма
  const { data } = useGetFilmByIdQuery(order.tickets[0].filmId || '');
  const [isReturning, setIsReturning] = useState(false);

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
      <ReturnOrderModal orderId={order._id} isOpen={isReturning} onClose={() => setIsReturning(false)} />
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
        <Button variant="outlined" fullWidth className={styles.button} onClick={() => setIsReturning(true)}>
          Вернуть билет
        </Button>
      </div>
    </>
  );
};
