import { useState } from 'react';
import useAuthContext from '../context/authContext';
import AuthFormInput from '../components/UI/AuthFormInput';
import usePasswordToggle from '../hooks/usePasswordToggle';
import Link from 'next/link';
import Head from 'next/head';
import PageLayout from '../components/layout/PageLayout';
import AuthCard from '../components/UI/Card/AuthCard';

export default function register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const [PasswordInputType, TogglePasswordIcon]: any = usePasswordToggle();
  const [PasswordConfirmationInputType, TogglePasswordConfirmationIcon]: any =
    usePasswordToggle();

  const { register, errors } = useAuthContext();

  const handleRegister = (event: any) => {
    event.preventDefault();
    register({ name, email, password, password_confirmation });
  };

  return (
    <>
      <Head>
        <title>
          Register - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>
      <PageLayout className="my-[8rem]">
        {/* Register cart */}
        <AuthCard>
          <form className="max-w-md mx-auto" onSubmit={handleRegister}>
            <h1 className="text-2xl font-semibold">Register Form</h1>
            <div className="py-8 text-base space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <AuthFormInput
                id="name"
                name="name"
                setInput={setName}
                value={name}
                type="name"
                placeholder="Name"
                error={errors?.name}
              />

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
                error={errors?.password}
                ToggleIcon={TogglePasswordIcon}
              />

              <AuthFormInput
                id="password_confirmation"
                name="password_confirmation"
                setInput={setPasswordConfirmation}
                value={password_confirmation}
                type={PasswordConfirmationInputType}
                placeholder="Password Confirmation"
                ToggleIcon={TogglePasswordConfirmationIcon}
              />

              <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-xl px-6 py-2 text-sm font-semibold">
                Submit
              </button>

              <div className="flex justify-start text-sm sm:pt-2">
                <span>
                  Already have an account?{' '}
                  <Link href="/login">
                    <span className="text-red-500">Click here</span>
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </AuthCard>
      </PageLayout>
    </>
  );
}
