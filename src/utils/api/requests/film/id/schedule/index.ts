import { FilmId, GetFilmScheduleByIdResponse } from '@src/@types/api';
import { api } from '@src/utils';
import { RequestConfig } from '../../../requestConfig';

type GetFilmScheduleByIdConfig = RequestConfig<FilmId>;

export const getFilmScheduleById = (config: GetFilmScheduleByIdConfig) =>
  api.get<GetFilmScheduleByIdResponse>(`cinema/film/${config.params}/schedule`, config.config);
