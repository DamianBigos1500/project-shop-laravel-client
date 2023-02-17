import React, { useEffect, useState } from 'react';
import useAuthContext from '../context/authContext';
import usePasswordToggle from '../hooks/usePasswordToggle';
import AuthFormInput from '../components/UI/AuthFormInput';
import Link from 'next/link';
import Head from 'next/head';
import PageLayout from '../components/layout/PageLayout';
import AuthCard from '../components/UI/Card/AuthCard';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [PasswordInputType, ToggleIcon]: any = usePasswordToggle();
  const { login, errors } = useAuthContext();

  const handleLogin = (event: any) => {
    event.preventDefault();

    login({ email, password });
  };

  return (
    <>
      <Head>
        <title>Login - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>
      <PageLayout className="my-[8rem]">
        {/* Login cart */}
        <AuthCard>
          <form className="max-w-md mx-auto" onSubmit={handleLogin}>
            <h1 className="text-2xl font-semibold">Login Form</h1>
            <div className="py-8 text-base space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <AuthFormInput
                id="email"
                name="email"
                setInput={setEmail}
                value={email}
                type="email"
                placeholder="Email Address"
                error={errors?.email}
              />

              <AuthFormInput
                id="password"
                name="password"
                setInput={setPassword}
                value={password}
                type={PasswordInputType}
                placeholder="Password"
                error={errors?.email}
                ToggleIcon={ToggleIcon}
              />

              <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-xl px-6 py-2 text-sm font-semibold">
                Submit
              </button>

              <div className="flex justify-between text-sm sm:pt-2">
                <span>
                  Don't have an account?{' '}
                  <Link href="/register">
                    <span className="text-red-500">Click here</span>
                  </Link>
                </span>
                <Link href="/forgot-password">Forgot password?</Link>
              </div>
            </div>
          </form>
        </AuthCard>
      </PageLayout>
    </>
  );
}
