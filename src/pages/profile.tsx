import GuestLayout from '@/layouts/GuestLayout';
import { protectedLoginRoute } from '@/utils/protectedRoutes/protectedLoginRoute';
import Head from 'next/head';

function profile() {
  return (
    <>
      <Head>
        <title>
          Profile Page - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>
      <GuestLayout>profile</GuestLayout>
    </>
  );
}

export default protectedLoginRoute(profile);
