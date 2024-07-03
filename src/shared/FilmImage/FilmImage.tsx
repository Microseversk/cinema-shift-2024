import { Typography } from '..';
import styles from './styles.module.scss';

interface FilmImageProps {
  image: string;
  alt: string;
  genre: string;
  country: string;
  releaseDate: string;
}

export const FilmImage = ({ image, alt, country, releaseDate, genre }: FilmImageProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={alt} className={styles.img} />
      <div className={styles.info}>
        <Typography size="sm">{genre}</Typography>
        <br />
        <Typography size="sm" weight="thin">
          {country}, {releaseDate}
        </Typography>
      </div>
    </div>
  );
};
