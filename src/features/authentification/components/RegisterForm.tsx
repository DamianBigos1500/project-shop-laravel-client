import { useState } from 'react';
import AuthFormInput from '@/features/authentification/components/FormInput';
import Link from 'next/link';
import useAuthContext from '@/context/useAuthContext';
import usePasswordToggle from '@/hooks/usePasswordToggle';
import useInput from '@/hooks/useInput';
import AuthSubmitButton from '@/components/UI/Button/SubmitButton';

export default function RegisterForm() {
  const name = useInput('');
  const email = useInput('');
  const password = useInput('');
  const password_confirmation = useInput('');

  const [PasswordInputType, TogglePasswordIcon]: any = usePasswordToggle();
  const [PasswordConfirmationInputType, TogglePasswordConfirmationIcon]: any =
    usePasswordToggle();

  const { register, errors } = useAuthContext();

  const handleRegister = (event: any) => {
    event.preventDefault();
    register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    });
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleRegister}>
      <h1 className="text-2xl font-semibold">Register Form</h1>
      <div className="py-8 text-base space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <AuthFormInput
          id="name"
          name="name"
          {...name}
          type="name"
          placeholder="Name"
          error={errors?.name}
        />

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
          error={errors?.password}
          ToggleIcon={TogglePasswordIcon}
        />

        <AuthFormInput
          id="password_confirmation"
          name="password_confirmation"
          {...password_confirmation}
          type={PasswordConfirmationInputType}
          placeholder="Password Confirmation"
          ToggleIcon={TogglePasswordConfirmationIcon}
        />
        
        <AuthSubmitButton>Submit</AuthSubmitButton>

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
  );
}
