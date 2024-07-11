import { GetUserSessionResponse } from '@src/@types/api';
import { api } from '@src/utils/api';
import { RequestConfig } from '../../requestConfig';

type GetUserSessionConfig = RequestConfig;

export const getUserSession = (config?: GetUserSessionConfig) =>
  api.get<GetUserSessionResponse>('users/session', config?.config);
