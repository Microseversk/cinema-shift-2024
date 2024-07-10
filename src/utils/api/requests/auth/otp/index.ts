import { CreateOtpDto, OtpResponse } from '@src/@types/api';
import { api } from '@src/utils/api';
import { RequestConfig } from '../../requestConfig';

export type PostOtpConfig = RequestConfig<CreateOtpDto>;

export const postOtp = ({ params, config }: PostOtpConfig) => api.post<OtpResponse>('/auth/otp', params, config);
