import { Film } from '@src/@types/api';
import { FilmImage, FilmRating, Typography } from '@src/shared';
import { API } from '@src/utils/constants/api';

import styles from './styles.module.scss';

interface FilmInfoProps {
  film: Film;
}

export const FilmInfo = ({ film }: FilmInfoProps) => (
  <div className={styles.info}>
    <FilmImage
      image={`${API.IMG_BASE_URL}${film?.img}`}
      alt={film.originalName}
      genre={film.genres[0]}
      country={film.country.name}
      releaseDate={film.releaseDate}
    />
    <div>
      <Typography tag="h1" variant="h1">
        {film.name}
      </Typography>
      <div>
        <FilmRating rating={Number(film.userRatings.kinopoisk)} />
        <Typography variant="p_14_regular" color="tertiary">
          Kinopoisk - {film.userRatings.kinopoisk}
        </Typography>
      </div>
      <Typography variant="p_16_regular" color="secondary">
        {film.description}
      </Typography>
    </div>
  </div>
);
