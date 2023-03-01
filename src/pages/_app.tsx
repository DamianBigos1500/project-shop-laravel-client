import type { AppProps } from 'next/app';
import { AuthProvider } from '@/features/authentification/context/authContext';
import { CategoryProvider } from '@/features/category/context/categoryContext';
import { CartProvider } from '@/features/cart/context/cartContext';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CategoryProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </CategoryProvider>
    </AuthProvider>
  );
}

export default MyApp;
