import { Film } from '@src/@types/api';
import { Button, FilmImage, FilmRating, Typography } from '@src/shared';
import { API } from '@src/utils/constants/api';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface FilmCardProps {
  film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div className={styles.card}>
      <FilmImage
        image={`${API.IMG_BASE_URL}${film.img}`}
        alt={film.originalName}
        country={film.country.name}
        genre={film.genres[0]}
        releaseDate={film.releaseDate}
      />
      <div>
        <Typography tag="h3" variant="h3">
          {film?.name}
        </Typography>
      </div>
      <div>
        <FilmRating rating={Number(film.userRatings.kinopoisk)} />
        <Typography variant="p_14_regular" color="tertiary">
          Кинопоиск - {film.userRatings.kinopoisk}
        </Typography>
      </div>
      <Link to={NAVIGATE_ROUTES.FILM_PAGE_ID(film.id)}>
        <Button fullWidth>Подробнее</Button>
      </Link>
    </div>
  );
};
