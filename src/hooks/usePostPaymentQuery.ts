import { postPayment, PostPaymentConfig } from '@src/utils/api/requests';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostPaymentQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (config: PostPaymentConfig) => postPayment(config),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      });
    },
  });
};
