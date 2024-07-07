import { Place } from '@src/@types/api';
import { Button, Typography } from '@src/shared';
import classNames from 'classnames';
import { ChoosedPlace } from '../ChooseTicketSection';
import styles from './styles.module.scss';

interface FilmShowPlacesProps {
  places: Place[][];
  choosedPlaces?: ChoosedPlace[];
  onPlaceClick: (place: ChoosedPlace) => void;
}

export const FilmShowPlaces = ({
  places: placeRows,
  choosedPlaces,
  onPlaceClick,
}: FilmShowPlacesProps) => (
  <div className={styles.places_wrapper}>
    <Typography variant="p_12_regular" color="secondary">
      Экран
    </Typography>
    <div className={styles.screen} />
    {placeRows &&
      placeRows.map((row, rowIndex) => (
        <div className={styles.places_row} key={rowIndex}>
          <Typography variant="p_14_regular">{rowIndex + 1}</Typography>
          {row.map((place, columnIndex) => (
            <div className={styles.btn_place_wrapper} key={columnIndex}>
              <Button
                className={classNames(styles.btn_place, {
                  [styles.choosed]: choosedPlaces?.some(
                    (p) => p.row === rowIndex + 1 && p.column === columnIndex + 1,
                  ),
                })}
                disabled={place.type === 'BLOCKED'}
                onClick={() =>
                  onPlaceClick({
                    row: rowIndex + 1,
                    column: columnIndex + 1,
                    price: place.price,
                  })
                }
              >
                {columnIndex + 1}
              </Button>
            </div>
          ))}
        </div>
      ))}
  </div>
);
