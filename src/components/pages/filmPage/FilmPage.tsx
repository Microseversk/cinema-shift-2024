import { useGetFilmByIdQuery, useGetFilmScheduleByIdQuery } from '@src/hooks';
import { ArrowSmallLeftIcon, Typography } from '@src/shared';
import { Link, useParams } from 'react-router-dom';

import { Back } from '@src/shared/Back/Back';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { FilmPageSkeleton } from './filmPageSkeleton/FilmPageSkeleton';
import { FilmInfo } from './modules';
import { ChooseTicketSection } from './modules/chooseTicketSection/ChooseTicketSection';
import styles from './styles.module.scss';

export const FilmPage = () => {
  const { id } = useParams();
  const { data: film, isLoading: isFilmLoading } = useGetFilmByIdQuery(id ? id : '');
  const { data: schedules, isLoading: isScheduleLoading } = useGetFilmScheduleByIdQuery(id ? id : '');

  if (isFilmLoading || isScheduleLoading) {
    return <FilmPageSkeleton />;
  }

  if (!film) {
    return (
      <Typography tag="h2" variant="h2">
        Фильма не найдено
      </Typography>
    );
  }

  return (
    <div className={styles.film_page_wrapper}>
      <Link to={NAVIGATE_ROUTES.ROOT_PAGE}>
        <Back icon={<ArrowSmallLeftIcon />}>
          <Typography variant="p_16_medium" color="tertiary">
            Назад
          </Typography>
        </Back>
      </Link>
      <FilmInfo film={film} />
      {schedules?.length ? (
        <ChooseTicketSection schedules={schedules} filmId={id || ''} />
      ) : (
        <Typography tag="h2" variant="h2">
          Показы отсутствуют
        </Typography>
      )}
    </div>
  );
};
