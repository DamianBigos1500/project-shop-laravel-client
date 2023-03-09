import { FormEvent, useState } from 'react';
import AuthFormInput from '@/features/authentification/components/FormInput';
import Link from 'next/link';
import useAuthContext from '@/context/useAuthContext';
import usePasswordToggle from '@/hooks/usePasswordToggle';
import useInput from '@/hooks/useInput';
import { onSubmitType } from '@/types/onSubmitType';
import AuthSubmitButton from '@/components/UI/Button/SubmitButton';

export default function LoginForm() {
  const email = useInput('');
  const password = useInput('');
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const { login, errors } = useAuthContext();

  const handleLogin = (e: onSubmitType) => {
    e.preventDefault();
    login({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleLogin}>
      <h1 className="text-2xl font-semibold">Login Form</h1>
      <div className="py-8 text-base space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <AuthFormInput
          id="email"
          name="email"
          {...email}
          type="email"
          placeholder="Email Address"
          error={errors?.email}
        />

        <AuthFormInput
          id="password"
          name="password"
          {...password}
          type={PasswordInputType}
          placeholder="Password"
          error={errors?.email}
          ToggleIcon={ToggleIcon}
        />

        <AuthSubmitButton>Submit</AuthSubmitButton>

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
  );
}
