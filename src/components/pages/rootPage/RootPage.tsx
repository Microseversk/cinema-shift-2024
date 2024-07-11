import { Typography } from '@src/shared';

import { useGetTodayQuery } from '@src/utils/api/hooks/useGetTodayQuery';
import { FilmCard, FilmCardSkeleton } from './modules';
import styles from './styles.module.scss';

export const RootPage = () => {
  const { data, isLoading } = useGetTodayQuery();

  return (
    <div>
      <Typography tag="h2" variant="h2">
        Афиша
      </Typography>
      <div className={styles.cards_wrapper}>
        {isLoading ? (
          <>
            {[...Array(3)].map((_, index) => (
              <FilmCardSkeleton key={index} />
            ))}
          </>
        ) : (
          <>{data?.films.map((film) => <FilmCard key={film.id} film={film} />)}</>
        )}
      </div>
    </div>
  );
};
