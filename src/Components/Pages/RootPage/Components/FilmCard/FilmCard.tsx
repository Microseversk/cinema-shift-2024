import { Film } from '../../../../../@types/api';
import { Button, FilmImage, FilmRating, Typography } from '../../../../../shared';
import styles from './styles.module.scss';

interface FilmCardProps {
  film: Film;
}
export const FilmCard = ({ film }: FilmCardProps) => (
  <div className={styles.card}>
    <FilmImage
      image={`https://shift-backend.onrender.com${film.img}`}
      alt={film.originalName}
      country={film.country.name}
      genre={film.genres[0]}
      releaseDate={film.releaseDate}
    />
    <div>
      <Typography variant="h3">{film?.name}</Typography>
      <Typography size="sm" color="tertiary" weight="thin">
        {film?.name}
      </Typography>
    </div>
    <div>
      <FilmRating rating={Number(film.userRatings.kinopoisk)} />
      <Typography size="sm" weight="thin" color="tertiary">
        Кинопоиск - {film.userRatings.kinopoisk}
      </Typography>
    </div>
    <Button>
      <Typography weight="semibold" color="invert">
        Подробнее
      </Typography>
    </Button>
  </div>
);
