import { useGetOrdersQuery } from '@src/hooks/useGetOrdersQuery';
import { OrderCard } from './orderCard/OrderCard';

import { Typography } from '@src/shared';
import { OrderCardSkeleton } from './orderCard/OrderCardSkeleton';
import styles from './styles.module.scss';

export const OrdersPage = () => {
  const { data, isLoading } = useGetOrdersQuery();

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Typography tag="h2" variant="h2">
          Билеты
        </Typography>
        {[...Array(3)].map((_, index) => (
          <OrderCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Typography tag="h2" variant="h2">
        Билеты
      </Typography>
      {data?.data?.orders
        .slice()
        .reverse()
        .map((order) => <OrderCard key={order._id} order={order} />)}
    </div>
  );
};
