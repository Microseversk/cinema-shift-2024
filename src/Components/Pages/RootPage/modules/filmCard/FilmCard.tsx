import { Film } from '@src/@types/api';
import { Button, FilmImage, FilmRating, Typography } from '@src/shared';
import { useNavigate } from 'react-router-dom';

import { API } from '@src/utils/constants/api';
import styles from './styles.module.scss';

interface FilmCardProps {
  film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  const navigate = useNavigate();

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
      <Button onClick={() => navigate(`/film/${film.id}`)}>
        <Typography weight="semibold" color="invert">
          Подробнее
        </Typography>
      </Button>
    </div>
  );
};