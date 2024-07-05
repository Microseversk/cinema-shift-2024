import { Film, FilmHall, Schedule } from '@src/@types/api';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FilmStore {
  film: Film | null;
  schedule: Schedule[] | null;
  choosedHallDayTime: {
    date: string;
    time: string;
    hall: FilmHall;
  } | null;
  setFilm: (film: Film) => void;
  setSchedule: (schedule: Schedule[]) => void;
  setChoosedHallDayTime: (choosedSchedule: { date: string; hall: FilmHall; time: string }) => void;
  clearStore: () => void;
}

export const useFilmStore = create<FilmStore>()(
  devtools((set) => ({
    film: null,
    schedule: null,
    choosedHallDayTime: null,
    setFilm: (film) => set({ film }),
    setSchedule: (schedule) => set({ schedule }),
    setChoosedHallDayTime: (choosedSchedule) => set({ choosedHallDayTime: choosedSchedule }),
    clearStore: () => set({ film: null, choosedHallDayTime: null, schedule: null }),
  })),
);
