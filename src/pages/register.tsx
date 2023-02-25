import Head from 'next/head';
import AuthCard from '@/features/authentification/components/AuthCard';
import GuestLayout from '@/layouts/GuestLayout';
import RegisterForm from '@/features/authentification/components/RegisterForm';

export default function register() {
  return (
    <>
      <Head>
        <title>
          Register - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>

      <GuestLayout>
        <AuthCard>
          <RegisterForm />
        </AuthCard>
      </GuestLayout>
    </>
  );
}
