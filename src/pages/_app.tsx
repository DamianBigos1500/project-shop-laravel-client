import type { AppProps } from 'next/app';
import { AuthProvider } from '@/features/authentification/context/authContext';
import '@/styles/globals.css';
import { CategoryProvider } from '@/features/category/context/categoryContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CategoryProvider>
        <Component {...pageProps} />
      </CategoryProvider>
    </AuthProvider>
  );
}

export default MyApp;
