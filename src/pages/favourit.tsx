import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import React from 'react';

export default function favourit() {
  return (
    <>
      <Head>
        <title>
          Favourit - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>

      <GuestLayout>
        Favourit
      </GuestLayout>
    </>
  );
}
