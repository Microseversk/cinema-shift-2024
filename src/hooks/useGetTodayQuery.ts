import { getToday } from '@src/utils/api/requests';
import { useQuery } from '@tanstack/react-query';

export const useGetTodayQuery = () =>
  useQuery({
    queryFn: () => getToday(),
    queryKey: ['today'],
    select: (data) => data.data,
  });
