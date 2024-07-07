import { Place, Schedule, ScheduleSeance } from '@src/@types/api';
import { Button, Tabs, Typography } from '@src/shared';
import { useState } from 'react';
import { FilmShowPlaces, FilmShowTimes } from '..';

import { HALLS_MAP } from '@src/utils/constants/hallsMap';
import styles from './styles.module.scss';

export interface ChoosedPlace extends Omit<Place, 'type'> {
  row: number;
  column: number;
}

interface ChooseTicketSectionProps {
  schedules: Schedule[];
}

export const ChooseTicketSection = ({ schedules }: ChooseTicketSectionProps) => {
  const [choosedDay, setChoosedDay] = useState<Schedule>(schedules[0]);
  const [choosedTime, setChoosedTime] = useState<Omit<ScheduleSeance, 'payedTickets'>>({
    hall: choosedDay.seances[0].hall,
    time: choosedDay.seances[0].time,
  });
  const [choosedPlaces, setChoosedPlaces] = useState<ChoosedPlace[]>([]);

  const onDateClick = (date: string) => {
    const choosingDay = schedules.find((s) => s.date === date) || schedules[0];
    setChoosedDay(choosingDay || schedules[0]);
    setChoosedTime({
      hall: choosingDay.seances[0].hall,
      time: choosingDay.seances[0].time,
    });
    setChoosedPlaces([]);
  };

  const onTimeClick = (time: Omit<ScheduleSeance, 'payedTickets'>) => {
    setChoosedTime(time);
    setChoosedPlaces([]);
  };

  const onPlaceClick = (place: ChoosedPlace) => {
    if (choosedPlaces.some((p) => p.row === place.row && p.column === place.column)) {
      setChoosedPlaces(
        choosedPlaces.filter((p) => !(p.column === place.column && p.row === place.row)),
      );
    } else {
      setChoosedPlaces([...choosedPlaces, place]);
    }
  };

  return (
    <div className={styles.choose_ticket_section_wrapper}>
      <Tabs
        tabs={schedules.map((schedule) => schedule.date)}
        activeTab={choosedDay.date}
        onTabClick={onDateClick}
        className={styles.date}
      />
      <Typography tag="h2" variant="h2">
        Расписание
      </Typography>
      <FilmShowTimes
        seances={choosedDay.seances}
        choosedSeanceTime={choosedTime}
        onChangeSeanceTime={onTimeClick}
      />
      <Typography tag="h2" variant="h2">
        Выбор места
      </Typography>
      <div className={styles.places}>
        <FilmShowPlaces
          places={choosedTime.hall.places}
          choosedPlaces={choosedPlaces}
          onPlaceClick={onPlaceClick}
        />
        {choosedPlaces.length > 0 && (
          <div className={styles.choosed_tickets_wrapper}>
            <div>
              <Typography variant="p_12_regular" color="tertiary">
                Зал
              </Typography>
              <Typography variant="p_16_regular">{HALLS_MAP[choosedTime.hall.name]}</Typography>
            </div>
            <div>
              <Typography variant="p_12_regular" color="tertiary">
                Дата и время
              </Typography>
              <Typography variant="p_16_regular">
                {choosedDay.date} {choosedTime.time}
              </Typography>
            </div>
            <div>
              <Typography variant="p_12_regular" color="tertiary">
                Места
              </Typography>

              <Typography variant="p_16_regular"></Typography>
            </div>
            <Typography tag="h3" variant="h3">
              Сумма:{choosedPlaces.reduce((a, b) => a + b.price, 0)}
            </Typography>
            <Button>Купить</Button>
          </div>
        )}
      </div>
    </div>
  );
};
