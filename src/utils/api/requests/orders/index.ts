import { OrdersResponse } from '@src/@types/api';
import { api } from '../..';
import { RequestConfig } from '../requestConfig';

export * from './cancel';

type getOrdersConfig = RequestConfig;

export const getOrders = (config?: getOrdersConfig) =>
  api.get<OrdersResponse>('cinema/orders', config?.config);
