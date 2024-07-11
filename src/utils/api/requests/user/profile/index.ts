import { UpdateProfileDto } from '@src/@types/api';
import { api } from '@src/utils/api';
import { RequestConfig } from '../../requestConfig';

export type PatchUserProfileConfig = RequestConfig<UpdateProfileDto>;

export const patchUserProfile = ({ params, config }: PatchUserProfileConfig) =>
  api.patch('users/profile', params, config);
