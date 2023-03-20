import useAuthContext from '@/context/useAuthContext';
import { useRouter } from 'next/router';
import { ElementType } from 'react';

export function protectedGuessRoute(Component: ElementType) {
  return function WithProtected(props: any) {
    const { user } = useAuthContext();
    const router = useRouter();

    if (user) {
      router.replace('/');

      return;
    }

    return <Component {...props} />;
  };
}
