import { useQuery } from '@tanstack/react-query';
import { getToday } from '../utils/api/requests';

export const useGetTodayQuery = () => {
  const query = useQuery({
    queryFn: () => getToday(),
    queryKey: ['today'],
    select: (data) => data.data,
  });

  return { ...query };
};
