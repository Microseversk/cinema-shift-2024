import { useQuery } from '@tanstack/react-query';
import { FilmId } from '../@types/api';
import { getFilmScheduleById } from '../utils/api/requests';

export const useGetFilmScheduleByIdQuery = (id: FilmId) => {
  const query = useQuery({
    queryFn: () => getFilmScheduleById({ params: id }),
    queryKey: ['schedule', id],
    select: (data) => data.data.schedules,
  });

  return { ...query };
};
