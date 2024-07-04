import { useState } from 'react';
import { Schedule } from '../../../../../@types/api';
import { Button, Tabs, Typography } from '../../../../../shared';

import styles from './styles.module.scss';

interface FilmScheduleProps {
  schedule: Schedule[];
}

export const FilmSchedule = ({ schedule }: FilmScheduleProps) => {
  const [activeTab, setActiveTab] = useState(schedule[0].date);
  const [activeDay, setActiveDay] = useState(schedule[0]);
  const hallsSchedule = [
    { seances: activeDay.seances.filter((seance) => seance.hall.name === 'Red'), name: 'Красный зал' },
    { seances: activeDay.seances.filter((seance) => seance.hall.name === 'Green'), name: 'Зелёный зал' },
    { seances: activeDay.seances.filter((seance) => seance.hall.name === 'Blue'), name: 'Синий зал' },
  ];

  return (
    <div>
      <Tabs
        tabs={schedule.map((item) => item.date)}
        activeTab={activeTab}
        onTabClick={(tab: string) => {
          setActiveTab(tab);
          setActiveDay(schedule.find((item) => item.date === tab)!);
        }}
      />
      {hallsSchedule.map((hall, index) => (
        <div key={index} className={styles.hall_wrapper}>
          <Typography weight="thin" size="xs" color="secondary">
            {hall.name}
          </Typography>
          <div className={styles.halls_time_wrapper}>
            {hall.seances.map((seance, index) => (
              <Button key={index} className={styles.btn_time} variant="outlined">
                {seance.time}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
