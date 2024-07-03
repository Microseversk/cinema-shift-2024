import { useGetTodayQuery } from '../../../hooks/useGetTodayQuery';
import { Typography } from '../../../shared';
import { FilmCard } from './Components';
import { FilmCardSkeleton } from './Components/FilmCard/FilmCardSkeleton';
import styles from './styles.module.scss';
export const RootPage = () => {
  const { data, isLoading } = useGetTodayQuery();

  return (
    <>
      <Typography variant="h2">Афиша</Typography>
      <div className={styles.cards_wrapper}>
        {isLoading ? (
          <>
            {[...Array(6)].map((_, index) => (
              <FilmCardSkeleton key={index} />
            ))}
          </>
        ) : (
          <>{data?.films.map((film) => <FilmCard key={film.id} film={film} />)}</>
        )}
      </div>
    </>
  );
};
