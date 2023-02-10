import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext<any>({});

export function AuthProvider({ children }: any) {
  const auth = useAuth();

  if (auth.loading) return <div>loading...</div>;
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default function useAuthContext() {
  return useContext(AuthContext);
}
