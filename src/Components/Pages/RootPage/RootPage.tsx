import { useGetTodayQuery } from '../../../hooks/useGetTodayQuery';
import { Typography } from '../../../shared';
import { FilmCard } from './Components';
import styles from './styles.module.scss';
export const RootPage = () => {
  const { data, isLoading } = useGetTodayQuery();
  if (isLoading) return <div>Загрузка...</div>;
  return (
    <>
      <Typography variant="h2">Афиша</Typography>
      <div className={styles.cards_wrapper}>{data?.films.map((film) => <FilmCard key={film.id} film={film} />)}</div>
    </>
  );
};
