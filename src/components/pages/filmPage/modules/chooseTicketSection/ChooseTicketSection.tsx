import { Schedule, ScheduleSeance } from '@src/@types/api';
import { Typography } from '@src/shared';
import { FilmShowPlaces, FilmShowTimes } from '..';

import { useState } from 'react';
import { FilmShowDays } from './filmShowDays/FilmShowDays';
import styles from './styles.module.scss';

interface ChooseTicketSectionProps {
  schedules: Schedule[];
}

export const ChooseTicketSection = ({ schedules }: ChooseTicketSectionProps) => {
  const [choosedDay, setChoosedDay] = useState<Schedule>(schedules[0]);
  const [choosedTime, setChoosedTime] = useState<Omit<ScheduleSeance, 'payedTickets'>>({
    hall: choosedDay.seances[0].hall,
    time: choosedDay.seances[0].time,
  });

  console.log(choosedDay, choosedTime);

  return (
    <>
      <div className={styles.schedule}>
        <FilmShowDays
          schedulesDate={schedules.map((schedule) => schedule.date)}
          choosedDate={choosedDay.date}
          onTabClick={(date: string) => {
            const choosingDay = schedules.find((s) => s.date === date) || schedules[0];
            setChoosedDay(choosingDay || schedules[0]);
            setChoosedTime({
              hall: choosingDay.seances[0].hall,
              time: choosingDay.seances[0].time,
            });
          }}
        />
        <Typography tag="h2" variant="h2">
          Расписание
        </Typography>
        <FilmShowTimes
          seances={choosedDay.seances}
          choosedSeanceTime={choosedTime}
          onChangeSeanceTime={(time: Omit<ScheduleSeance, 'payedTickets'>) => setChoosedTime(time)}
        />
      </div>
      <div>
        <Typography tag="h2" variant="h2">
          Выбор места
        </Typography>
        <FilmShowPlaces places={choosedTime.hall.places} />
      </div>
      <div></div>
    </>
  );
};
