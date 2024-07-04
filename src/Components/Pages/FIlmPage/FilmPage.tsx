import { FilmSchedule } from '@src/Components/Pages/FIlmPage/Components';
import { useGetFilmByIdQuery, useGetFilmScheduleByIdQuery } from '@src/hooks';
import { FilmImage, FilmRating, Typography } from '@src/shared';
import { useNavigate, useParams } from 'react-router-dom';

import { API } from '@src/utils/constants/api';
import { Places } from './Components/Places/Places';
import styles from './styles.module.scss';

export const FilmPage = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const { data: film, isLoading: isFilmLoading } = useGetFilmByIdQuery(id ? id : '');
  const { data: schedule, isLoading: isScheduleLoading } = useGetFilmScheduleByIdQuery(id ? id : '');

  if (isFilmLoading || isScheduleLoading) {
    return <Typography variant="h2">Загрузка...</Typography>;
  }
  if (!film || !schedule) {
    return <Typography variant="h2">Фильма не найдено</Typography>;
  }

  return (
    <div className={styles.film_page_wrapper}>
      <Typography onClick={() => navigate(-1)} className={styles.arrow}>
        {'<'} Назад
      </Typography>
      <div className={styles.info}>
        <FilmImage
          image={`${API.IMG_BASE_URL}${film?.img}`}
          alt={film.originalName}
          genre={film.genres[0]}
          country={film.country.name}
          releaseDate={film.releaseDate}
        />
        <div>
          <Typography variant="h1">{film.name}</Typography>
          <div>
            <FilmRating rating={Number(film.userRatings.kinopoisk)} />
            <Typography size="sm" weight="thin" color="tertiary">
              Kinopoisk - {film.userRatings.kinopoisk}
            </Typography>
          </div>
          <Typography weight="thin" color="secondary">
            {film.description}
          </Typography>
        </div>
      </div>
      <div className={styles.schedule}>
        <Typography variant="h2">Расписание</Typography>
        <FilmSchedule schedule={schedule} />
      </div>
      <div className={styles.places}>
        <Typography variant="h2">Выбор места</Typography>
        <Places />
      </div>
      <div className={styles.buying}>
        <Typography variant="h2">Покупка</Typography>
      </div>
    </div>
  );
};
