import { getToday } from '@src/utils/api/requests';
import { useQuery } from '@tanstack/react-query';

export const useGetTodayQuery = () => {
  const query = useQuery({
    queryFn: () => getToday(),
    queryKey: ['today'],
    select: (data) => data.data,
  });

  return { ...query };
};
