import { getUserSession } from '@src/utils/api/requests';
import { RequestConfig } from '@src/utils/api/requests/requestConfig';
import { useQuery } from '@tanstack/react-query';

export const useGetUserSessionQuery = (config?: RequestConfig) =>
  useQuery({
    queryFn: () => getUserSession(config),
    queryKey: ['userSession', config?.config?.headers?.Authorization],
  });
