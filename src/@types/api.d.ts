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
export type HallName = 'Red' | 'Green' | 'Blue';
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

export interface Place {
  price: number;
  type: 'BLOCKED' | 'ECONOM' | 'COMFORT';
}

export interface FilmHall {
  name: HallName;
  places: Place[][];
  payedTickets: Ticket[];
}

export interface ScheduleSeance {
  time: string;
  hall: FilmHall;
  payedTickets: Ticket[];
}

export interface FilmTicketSeance {
  date: string;
  time: string;
}

export interface Schedule {
  date: string;
  seances: ScheduleSeance[];
}

export interface DebitCard {
  pan: string;
  expireDate: string;
  cvv: string;
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

export interface PutOrdersCancelBody {
  orderId: string;
}

export interface CreatePaymentPerson {
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
}

export interface PostPaymentBody {
  filmId: FilmId;
  person: CreatePaymentPerson;
  seance: FilmTicketSeance;
  debitCard: DebitCard;
  tikcets: {
    row: number;
    column: number;
  };
}

export interface User {
  phone: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  city: string;
}

export interface GetUserSessionResponse extends ResponseBase {
  user: User;
}

export interface SignInDto {
  phone: string;
  code: number;
}

export interface postSignInResponse extends ResponseBase {
  user: User;
  token: string;
}

export interface CreateOtpDto {
  phone: string;
}

export interface OtpResponse extends ResponseBase {
  retryDelay: number;
}
