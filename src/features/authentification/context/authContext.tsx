import { createContext } from 'react';
import useAuth from '../hooks/useAuth';
import { childrenType } from '@/types/childrenType';

export const AuthContext = createContext<any>({});

export function AuthProvider({ children }: childrenType) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
