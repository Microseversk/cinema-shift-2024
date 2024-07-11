import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './components';
import { AuthContextProvider } from './store/authContext/AuthContextProvider';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </QueryClientProvider>
);
