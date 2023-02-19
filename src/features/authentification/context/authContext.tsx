import { createContext } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext<any>({});

export function AuthProvider({ children }: any) {
  const auth = useAuth();

  if (auth.loading) return <div>loading...</div>;
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
