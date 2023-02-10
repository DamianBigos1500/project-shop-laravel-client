import React, { useEffect, useState } from 'react';
import useAuthContext from '../context/authContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, errors } = useAuthContext();

  const handleLogin = (event: any) => {
    event.preventDefault();

    login({ email, password });
  };

  return (
    <div>
      <form onSubmit={handleLogin} noValidate>
        <div className="mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border-2"
          />
          <div className="flex">
            {errors.email && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.email[0]}
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border-2"
          />
          <div className="flex">
            {errors.password && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.password[0]}
              </span>
            )}
          </div>
        </div>

        <div className="mb-10">
          <button type="submit" className="">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
