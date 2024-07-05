import classNames from 'classnames';
import { Typography } from '../typography/Typography';

import styles from './styles.module.scss';

interface FilmImageProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  alt: string;
  genre: string;
  country: string;
  releaseDate: string;
}

export const FilmImage = ({ image, alt, country, releaseDate, genre, ...props }: FilmImageProps) => (
  <div {...props} className={classNames(styles.wrapper, props.className)}>
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