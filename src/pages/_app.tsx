import type { AppProps } from 'next/app';
import { AuthProvider } from '@/features/authentification/context/authContext';
import { CategoryProvider } from '@/features/category/context/categoryContext';
import { CartProvider } from '@/features/cart/context/cartContext';
import '@/styles/globals.css';
import UserWaitProvider from '@/components/UserWaitProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CategoryProvider>
        <CartProvider>
          <UserWaitProvider>
            <Component {...pageProps} />
          </UserWaitProvider>
        </CartProvider>
      </CategoryProvider>
    </AuthProvider>
  );
}

export default MyApp;
