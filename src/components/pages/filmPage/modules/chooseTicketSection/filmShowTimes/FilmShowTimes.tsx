import { ScheduleSeance } from '@src/@types/api';
import { Button, Typography } from '@src/shared';

import classNames from 'classnames';
import styles from './styles.module.scss';

interface FilmShowTimesProps {
  seances: ScheduleSeance[];
  onChangeSeanceTime: (time: Omit<ScheduleSeance, 'payedTickets'>) => void;
  choosedSeanceTime: Omit<ScheduleSeance, 'payedTickets'>;
}

export const FilmShowTimes = ({
  seances,
  onChangeSeanceTime,
  choosedSeanceTime,
}: FilmShowTimesProps) => {
  const hallsSchedule = [
    { seances: seances.filter((seance) => seance.hall.name === 'Red'), name: 'Красный зал' },
    { seances: seances.filter((seance) => seance.hall.name === 'Green'), name: 'Зелёный зал' },
    { seances: seances.filter((seance) => seance.hall.name === 'Blue'), name: 'Синий зал' },
  ];

  return (
    <div>
      {hallsSchedule.map((hall, index) => (
        <div key={index} className={styles.hall_wrapper}>
          <Typography variant="p_14_regular" color="secondary">
            {hall.name}
          </Typography>
          <div className={styles.halls_time_wrapper}>
            {hall.seances.map((seance, index) => (
              <Button
                key={index}
                variant="outlined"
                className={classNames(styles.btn_time, {
                  [styles.btn_choosed_time]:
                    seance.time === choosedSeanceTime.time &&
                    seance.hall.name === choosedSeanceTime.hall.name,
                })}
                onClick={() =>
                  onChangeSeanceTime({
                    hall: seance.hall,
                    time: seance.time,
                  })
                }
              >
                {seance.time}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
