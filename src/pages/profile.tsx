import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';

export default function profile() {
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

// export function getServerSideProps() {}
