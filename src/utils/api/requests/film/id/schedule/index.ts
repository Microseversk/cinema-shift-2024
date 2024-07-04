import { $api } from '../../../..';
import { FilmId, GetFilmScheduleByIdResponse } from '../../../../../../@types/api';
import { RequestConfig } from '../../../requestConfig';

type GetFilmScheduleByIdConfig = RequestConfig<FilmId>;

export const getFilmScheduleById = (config: GetFilmScheduleByIdConfig) =>
  $api.get<GetFilmScheduleByIdResponse>(`cinema/film/${config.params}/schedule`, config.config);
