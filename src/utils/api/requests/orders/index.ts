import { $api } from '../..';
import { PutOrdersCancelBody } from '../../../../@types/api';
import { RequestConfig } from '../requestConfig';

type putOrdersCancelConfig = RequestConfig<PutOrdersCancelBody>;

export const putOrdersCancel = (config: putOrdersCancelConfig) =>
  $api.put('cinema/orders/cancel', config.params, config.config);
