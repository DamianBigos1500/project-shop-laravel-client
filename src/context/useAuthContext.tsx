import { AuthContext } from '@/features/authentification/context/authContext';
import { useContext } from 'react';

export default function useAuthContext() {
  return useContext(AuthContext);
}
