import { AgeRating } from '@src/@types/api';

export const AGE_RATING_MAP: { [key in AgeRating]: string } = {
  G: '0+',
  PG: '10+',
  PG13: '13+',
  R: '16+',
  NC17: '18+',
};
