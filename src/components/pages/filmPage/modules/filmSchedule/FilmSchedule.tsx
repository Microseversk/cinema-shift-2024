import { Schedule } from '@src/@types/api';
import { Button, Tabs, Typography } from '@src/shared';
import { useFilmStore } from '@src/store/FilmStore';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

interface FilmScheduleProps {
  schedule: Schedule[];
}

export const FilmSchedule = ({ schedule }: FilmScheduleProps) => {
  const [activeDay, setActiveDay] = useState<Schedule | null>(schedule[0] || null);
  const { choosedHallDayTime, setChoosedHallDayTime } = useFilmStore();

  useEffect(() => {
    if (!choosedHallDayTime) {
      setChoosedHallDayTime({
        date: schedule[0].date,
        hall: schedule[0].seances[0].hall,
        time: schedule[0].seances[0].time,
      });
    }
  }, [choosedHallDayTime]);

  if (!activeDay) {
    return null;
  }

  const hallsSchedule = [
    { seances: activeDay.seances.filter((seance) => seance.hall.name === 'Red'), name: 'Красный зал' },
    { seances: activeDay.seances.filter((seance) => seance.hall.name === 'Green'), name: 'Зелёный зал' },
    { seances: activeDay.seances.filter((seance) => seance.hall.name === 'Blue'), name: 'Синий зал' },
  ];

  const handleTabClick = (date: string) => {
    const selectedDate = schedule.find((s) => s.date === date) || null;
    if (selectedDate) {
      setActiveDay(selectedDate);
      setChoosedHallDayTime({
        date: selectedDate.date,
        hall: selectedDate.seances[0].hall,
        time: selectedDate.seances[0].time,
      });
    }
  };

  return (
    <div>
      <Tabs
        tabs={schedule.map((item) => item.date)}
        activeTab={choosedHallDayTime?.date ? choosedHallDayTime.date : ''}
        onTabClick={handleTabClick}
      />
      {hallsSchedule.map((hall, index) => (
        <div key={index} className={styles.hall_wrapper}>
          <Typography weight="thin" size="xs" color="secondary">
            {hall.name}
          </Typography>
          <div className={styles.halls_time_wrapper}>
            {hall.seances.map((seance, index) => (
              <Button
                key={index}
                className={classNames(styles.btn_time, {
                  [styles.choosed_time]:
                    seance.hall.name === choosedHallDayTime?.hall.name && seance.time === choosedHallDayTime?.time,
                })}
                variant="outlined"
                onClick={() => {
                  setChoosedHallDayTime({
                    date: activeDay.date,
                    hall: seance.hall,
                    time: seance.time,
                  });
                }}
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
