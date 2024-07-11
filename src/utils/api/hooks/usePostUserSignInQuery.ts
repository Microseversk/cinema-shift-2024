import { postUserSignIn, PostUserSignInConfig } from '@src/utils/api/requests';
import { useMutation } from '@tanstack/react-query';

export const usePostUserSignInQuery = () =>
  useMutation({
    mutationFn: (config: PostUserSignInConfig) => postUserSignIn(config),
  });
