import { User } from '@src/@types/api';
import { useGetUserSessionQuery } from '@src/hooks/useGetUserSessionQuery';
import { useEffect, useState } from 'react';
import { authContext } from './authContext';

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const { data } = useGetUserSessionQuery();

  useEffect(() => {
    if (data?.data?.user) {
      setUser(data.data.user);
    }
  }, [data]);

  return (
    <authContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
