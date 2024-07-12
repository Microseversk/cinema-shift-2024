import { patchUserProfile, PatchUserProfileConfig } from '@src/utils/api/requests';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePatchUserProfileQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PatchUserProfileConfig) => patchUserProfile(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userSession'],
      });
    },
  });
};
