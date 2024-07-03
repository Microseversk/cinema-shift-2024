import { $api } from '../../../..';
import { FilmId } from '../../../../../../@types/api';
import { RequestConfig } from '../../../requestConfig';

type GetFilmScheduleByIdConfig = RequestConfig<FilmId>;

export const getFilmScheduleById = (config: GetFilmScheduleByIdConfig) =>
  $api.get(`cinema/film/${config.params}/schedule`, config.config);
