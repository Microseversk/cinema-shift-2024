import classNames from 'classnames';
import { Typography } from '../typography/Typography';

import { useState } from 'react';
import styles from './styles.module.scss';

interface FilmImageProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  alt: string;
  genre: string;
  country: string;
  releaseDate: string;
}

export const FilmImage = ({ image, alt, country, releaseDate, genre, ...props }: FilmImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div {...props} className={classNames(styles.wrapper, props.className, { [styles.loaded]: isLoaded })}>
      <img src={image} alt={alt} className={styles.img} loading="lazy" onLoad={() => setIsLoaded(true)} />
      <div className={styles.info}>
        <Typography variant="p_12_regular" className={styles.genre_text}>
          {genre}
        </Typography>
        <Typography variant="p_12_regular" className={styles.country_text}>
          {country}, {releaseDate}
        </Typography>
      </div>
    </div>
  );
};
