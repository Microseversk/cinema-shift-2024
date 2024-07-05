import { useGetFilmByIdQuery, useGetFilmScheduleByIdQuery } from '@src/hooks';
import { Typography } from '@src/shared';
import { Link, useParams } from 'react-router-dom';
import { FilmInfo } from './modules';

import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { ChooseTicketSection } from './modules/chooseTicketSection/ChooseTicketSection';
import styles from './styles.module.scss';

export const FilmPage = () => {
  const { id } = useParams();
  const { data: film, isLoading: isFilmLoading } = useGetFilmByIdQuery(id ? id : '');
  const { data: schedules, isLoading: isScheduleLoading } = useGetFilmScheduleByIdQuery(id ? id : '');

  if (isFilmLoading || isScheduleLoading) {
    return <Typography variant="h2">Загрузка...</Typography>;
  }

  if (!film) {
    return <Typography variant="h2">Фильма не найдено</Typography>;
  }

  return (
    <div className={styles.film_page_wrapper}>
      <Link to={NAVIGATE_ROUTES.ROOT_PAGE}>
        <Typography className={styles.arrow}>{'<'} Назад</Typography>
      </Link>
      <FilmInfo film={film} />
      {schedules?.length ? (
        <ChooseTicketSection schedules={schedules} />
      ) : (
        <Typography variant="h2">Показы отсутствуют</Typography>
      )}
    </div>
  );
};
