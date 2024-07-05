import { PutOrdersCancelBody } from '@src/@types/api';
import { api } from '@src/utils';
import { RequestConfig } from '../requestConfig';

type putOrdersCancelConfig = RequestConfig<PutOrdersCancelBody>;

export const putOrdersCancel = (config: putOrdersCancelConfig) =>
  api.put('cinema/orders/cancel', config.params, config.config);
