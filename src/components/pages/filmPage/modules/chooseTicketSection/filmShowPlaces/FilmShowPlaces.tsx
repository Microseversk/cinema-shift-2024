import { Place } from '@src/@types/api';
import { Button, Typography } from '@src/shared';
import styles from './styles.module.scss';

interface FilmShowPlacesProps {
  places: Place[][];
}

export const FilmShowPlaces = ({ places: placeRows }: FilmShowPlacesProps) => {
  return (
    <div className={styles.places_wrapper}>
      <Typography variant="p_12_regular" color="secondary">
        Экран
      </Typography>
      <div className={styles.screen} />
      {placeRows &&
        placeRows.map((row, index) => (
          <div className={styles.places_row} key={index}>
            <Typography variant="p_14_regular">{index + 1}</Typography>
            {row.map((place, index) => (
              <Button className={styles.place} key={index} disabled={place.type === 'BLOCKED'}>
                {index + 1}
              </Button>
            ))}
          </div>
        ))}
    </div>
  );
};
