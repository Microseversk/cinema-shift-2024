import { GetTodayResponse } from '@src/@types/api';
import { api } from '@src/utils';
import { RequestConfig } from '../requestConfig';

type GetTodayConfig = RequestConfig;

export const getToday = async (config?: GetTodayConfig) =>
  api.get<GetTodayResponse>('cinema/today', config?.config);
