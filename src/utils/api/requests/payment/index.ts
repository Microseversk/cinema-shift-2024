import { PaymentResponse, PostPaymentBody } from '@src/@types/api';
import { api } from '@src/utils';
import { RequestConfig } from '../requestConfig';

export type PostPaymentConfig = RequestConfig<PostPaymentBody>;

export const postPayment = (config: PostPaymentConfig) =>
  api.post<PaymentResponse>('cinema/payment', config.params, config);
