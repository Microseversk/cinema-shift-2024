import { Button, Typography } from '@src/shared';
import { useFilmStore } from '@src/store/FilmStore';
import styles from './styles.module.scss';

export const Places = () => {
  const placeRows = useFilmStore((store) => store.choosedHallDayTime?.hall.places);
  console.log(placeRows);
  return (
    <div className={styles.places_wrapper}>
      <Typography size="xs" weight="thin" color="secondary">
        Экран
      </Typography>
      <div className={styles.screen} />
      {placeRows &&
        placeRows.map((row, index) => (
          <div className={styles.places_row} key={index}>
            <Typography>{index + 1}</Typography>
            {row.map((place, index) => (
              <Button className={styles.place} key={index} disabled={place.type === 'BLOCKED'}>
                <Typography size="sm" weight="thin" color="invert">
                  {index + 1}
                </Typography>
              </Button>
            ))}
          </div>
        ))}
    </div>
  );
};
