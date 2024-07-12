import { User } from '@src/@types/api';
import { createContext } from 'react';

export interface AuthContext {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export const authContext = createContext<AuthContext>({
  user: undefined,
  setUser: () => {},
});
