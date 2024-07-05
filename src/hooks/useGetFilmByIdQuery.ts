import { FilmId } from '@src/@types/api';
import { getFilmById } from '@src/utils/api/requests';
import { useQuery } from '@tanstack/react-query';

export const useGetFilmByIdQuery = (id: FilmId) => {
  const query = useQuery({
    queryFn: () => getFilmById({ params: id }),
    queryKey: ['film', id],
    select: (data) => data.data.film,
  });

  return { ...query };
};
