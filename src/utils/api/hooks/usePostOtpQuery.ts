import { postOtp, PostOtpConfig } from '@src/utils/api/requests';
import { useMutation } from '@tanstack/react-query';

export const usePostOtpQuery = () =>
  useMutation({
    mutationFn: (params: PostOtpConfig) => postOtp(params),
  });
