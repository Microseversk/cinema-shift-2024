import { patchUserProfile, PatchUserProfileConfig } from '@src/utils/api/requests';
import { useMutation } from '@tanstack/react-query';

export const usePatchUserProfileQuery = () =>
  useMutation({
    mutationFn: (params: PatchUserProfileConfig) => patchUserProfile(params),
  });
