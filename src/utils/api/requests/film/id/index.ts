import { $api } from '../../..';
import { FilmId, GetFilmByIdResponse } from '../../../../../@types/api';
import { RequestConfig } from '../../requestConfig';

export type GetFilmByIdConfig = RequestConfig<FilmId>;

export const GetFilmById = (config: GetFilmByIdConfig) =>
  $api.get<GetFilmByIdResponse>(`film/${config.params}`, config?.config);
