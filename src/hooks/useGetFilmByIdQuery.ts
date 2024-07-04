import { useQuery } from '@tanstack/react-query';
import { FilmId } from '../@types/api';
import { getFilmById } from '../utils/api/requests';

export const useGetFilmByIdQuery = (id: FilmId) => {
  const query = useQuery({
    queryFn: () => getFilmById({ params: id }),
    queryKey: ['film', id],
    select: (data) => data.data.film,
  });

  return { ...query };
};
