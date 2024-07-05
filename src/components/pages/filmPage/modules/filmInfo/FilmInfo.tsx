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
);
