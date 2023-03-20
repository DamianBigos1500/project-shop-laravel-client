import useAuthContext from '@/context/useAuthContext';
import { useRouter } from 'next/router';
import { ElementType } from 'react';

export function protectedAdminRoute(Component: ElementType) {
  return function WithProtected(props: any) {
    const { user, isUserAdmin } = useAuthContext();
    const router = useRouter();

    if (!user || !isUserAdmin) {
      router.replace('/');
      return;
    }

    return <Component {...props} />;
  };
}
