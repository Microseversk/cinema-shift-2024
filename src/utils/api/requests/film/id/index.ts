import { $api } from '../../..';
import { FilmId, GetFilmByIdResponse } from '../../../../../@types/api';
import { RequestConfig } from '../../requestConfig';

export type GetFilmByIdConfig = RequestConfig<FilmId>;

export const getFilmById = (config: GetFilmByIdConfig) =>
  $api.get<GetFilmByIdResponse>(`cinema/film/${config.params}`, config?.config);
