import { $api } from '../..';
import { PostPaymentBody } from '../../../../@types/api';
import { RequestConfig } from '../requestConfig';

type PostPaymentConfig = RequestConfig<PostPaymentBody>;

export const postPayment = (config: PostPaymentConfig) => $api.post('cinema/payment', config.params, config);