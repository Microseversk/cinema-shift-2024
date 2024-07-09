import { postSignInResponse, SignInDto } from '@src/@types/api';
import { api } from '@src/utils/api';
import { RequestConfig } from '../../requestConfig';

export type PostUserSignInConfig = RequestConfig<SignInDto>;

export const postUserSignIn = async ({ params, config }: PostUserSignInConfig) =>
  api.post<postSignInResponse>('users/signin', params, config);
