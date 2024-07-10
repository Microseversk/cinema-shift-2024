import { Place, Schedule, ScheduleSeance } from '@src/@types/api';
import { useState } from 'react';

export interface ChoosedPlace extends Omit<Place, 'type'> {
  row: number;
  column: number;
}

export const placesObjectToArray = (places: ChoosedPlace[]) => {
  return Object.entries(
    places.slice().reduce((acc: { [key: number]: number[] }, place) => {
      if (!acc[place.row]) {
        acc[place.row] = [];
      }
      acc[place.row].push(place.column);
      return acc;
    }, []),
  );
};

export const useChooseTicketSection = (schedules: Schedule[]) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
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
      setChoosedPlaces(choosedPlaces.filter((p) => !(p.column === place.column && p.row === place.row)));
    } else {
      setChoosedPlaces([...choosedPlaces, place]);
    }
  };

  return {
    state: {
      choosedDay,
      choosedPlaces,
      choosedTime,
      modalIsOpen,
      isPaying,
      setChoosedDay,
      setChoosedTime,
      setChoosedPlaces,
      setModalIsOpen,
      setIsPaying,
    },
    actions: {
      onDateClick,
      onTimeClick,
      onPlaceClick,
      placesObjectToArray,
    },
  };
};
