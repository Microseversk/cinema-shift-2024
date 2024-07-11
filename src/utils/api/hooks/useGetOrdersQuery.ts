import { getOrders } from '@src/utils/api/requests/orders';
import { useQuery } from '@tanstack/react-query';

export const useGetOrdersQuery = () =>
  useQuery({
    queryFn: () => getOrders(),
    queryKey: ['orders'],
  });
