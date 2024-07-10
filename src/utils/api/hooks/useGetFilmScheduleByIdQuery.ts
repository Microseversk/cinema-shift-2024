import { FilmId } from '@src/@types/api';
import { getFilmScheduleById } from '@src/utils/api/requests';
import { useQuery } from '@tanstack/react-query';

export const useGetFilmScheduleByIdQuery = (id: FilmId) =>
  useQuery({
    queryFn: () => getFilmScheduleById({ params: id }),
    queryKey: ['schedule', id],
    select: (data) => data.data.schedules,
  });
