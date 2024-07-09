import { useGetOrdersQuery } from '@src/hooks/useGetOrdersQuery';
import { OrderCard } from './orderCard/OrderCard';

import { Typography } from '@src/shared';
import styles from './styles.module.scss';

export const OrdersPage = () => {
  const { data, isLoading } = useGetOrdersQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className={styles.wrapper}>
      <Typography tag="h2" variant="h2">
        Билеты
      </Typography>
      {data?.data.orders
        .filter((order) => order.status === 'PAYED')
        .reverse()
        .map((order) => <OrderCard key={order._id} order={order} />)}
    </div>
  );
};
