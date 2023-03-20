import useAuthContext from '@/context/useAuthContext';
import { childrenType } from '@/types/childrenType';

export default function UserWaitProvider({ children }: childrenType) {
  const { loading } = useAuthContext();

  if (loading) return <div>loading...</div>;

  return <div>{children}</div>;
}
