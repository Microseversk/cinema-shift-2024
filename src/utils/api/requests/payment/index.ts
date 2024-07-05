import { PostPaymentBody } from '@src/@types/api';
import { api } from '@src/utils';
import { RequestConfig } from '../requestConfig';

type PostPaymentConfig = RequestConfig<PostPaymentBody>;

export const postPayment = (config: PostPaymentConfig) => api.post('cinema/payment', config.params, config);
