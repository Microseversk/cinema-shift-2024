import { useGetFilmByIdQuery, useGetFilmScheduleByIdQuery } from '@src/hooks';
import { Typography } from '@src/shared';
import { Link, useParams } from 'react-router-dom';
import { FilmInfo, FilmSchedule, Places } from './modules';

import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import styles from './styles.module.scss';

export const FilmPage = () => {
  const { id } = useParams();
  const { data: film, isLoading: isFilmLoading } = useGetFilmByIdQuery(id ? id : '');
  const { data: schedules, isLoading: isScheduleLoading } = useGetFilmScheduleByIdQuery(id ? id : '');

  if (isFilmLoading || isScheduleLoading) {
    return <Typography variant="h2">Загрузка...</Typography>;
  }

  console.log(film, schedules);

  if (!film) {
    return <Typography variant="h2">Фильма не найдено</Typography>;
  }

  return (
    <div className={styles.film_page_wrapper}>
      <Link to={NAVIGATE_ROUTES.ROOT_PAGE}>
        <Typography className={styles.arrow}>{'<'} Назад</Typography>
      </Link>

      {schedules?.length ? (
        <>
          <FilmInfo film={film} />
          <div className={styles.schedule}>
            <Typography variant="h2">Расписание</Typography>
            <FilmSchedule schedule={schedules} />
          </div>
          <div className={styles.places}>
            <Typography variant="h2">Выбор места</Typography>
            <Places />
          </div>
          <div className={styles.buying}>
            <Typography variant="h2">Покупка</Typography>
          </div>
        </>
      ) : (
        <Typography variant="h2">Расписание отсутствует</Typography>
      )}
    </div>
  );
};
