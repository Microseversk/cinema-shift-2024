import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Components';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);
