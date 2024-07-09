import { putOrdersCancel, putOrdersCancelConfig } from '@src/utils/api/requests';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePutOrderCancelQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (config: putOrdersCancelConfig) => putOrdersCancel(config),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      });
    },
  });
};
