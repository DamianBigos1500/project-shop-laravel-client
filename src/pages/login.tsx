import React from 'react';
import Head from 'next/head';
import AuthCard from '@/features/authentification/components/AuthCard';
import GuestLayout from '@/layouts/GuestLayout';
import LoginForm from '@/features/authentification/components/LoginForm';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <AuthCard>
          <LoginForm />
        </AuthCard>
      </GuestLayout>
    </>
  );
}
