export interface FilmPerson {
  id: string;
  professions: 'ACTOR' | 'DIRECTOR';
  fullName: string;
}
export interface FilmUserRating {
  kinopoisk: string;
  imdb: string;
}

export interface Country {
  id: number;
  name: string;
  code: string;
  code2: string;
}

export type AgeRating = 'G' | 'PG' | 'PG13' | 'R' | 'NC17';
export type FilmId = string;
export interface Film {
  id: FilmId;
  name: string;
  originalName: string;
  description: string;
  releaseDate: string;
  actors: FilmPerson[];
  directors: FilmPerson[];
  runtime: number;
  ageRating: AgeRating;
  genres: string[];
  userRatings: FilmUserRating;
  img: string;
  country: Country;
}

export interface Ticket {
  filmId: FilmId;
  row: number;
  column: number;
  seance: FilmTicketSeance;
  phone: string;
}
export interface FilmHall {
  name: string;
  places: unknown;
  payedTickets: Ticket[];
}
export interface ScheduleSeance {
  time: string;
  hall: FilmHall;
}

export interface FilmTicketSeance {
  date: string;
  time: string;
}

export interface Schedule {
  date: string;
  seances: Seance[];
}

interface ResponseBase {
  success: boolean;
  reason: string;
}
export interface GetTodayResponse extends ResponseBase {
  films: Film[];
}

export interface GetFilmByIdResponse extends ResponseBase {
  film: Film;
}

export interface GetFilmScheduleByIdResponse extends ResponseBase {
  schedules: Schedule[];
}
