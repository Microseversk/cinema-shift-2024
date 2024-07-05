import { FilmId, GetFilmByIdResponse } from '@src/@types/api';
import { api } from '@src/utils/api';
import { RequestConfig } from '../../requestConfig';

export type GetFilmByIdConfig = RequestConfig<FilmId>;

export const getFilmById = (config: GetFilmByIdConfig) =>
  api.get<GetFilmByIdResponse>(`cinema/film/${config.params}`, config?.config);
