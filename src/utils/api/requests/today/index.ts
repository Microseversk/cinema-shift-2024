import { $api } from '../..';
import { GetTodayResponse } from '../../../../@types/api';
import { RequestConfig } from '../requestConfig';

type GetTodayConfig = RequestConfig;

export const getToday = async (config?: GetTodayConfig) => $api.get<GetTodayResponse>('today', config?.config);
