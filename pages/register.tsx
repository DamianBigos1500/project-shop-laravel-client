import { useState } from 'react';
import useAuthContext from '../context/authContext';

export default function register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const { register, errors } = useAuthContext();

  const handleRegister = (event: any) => {
    event.preventDefault();
    register({ name, email, password, password_confirmation });
  };

  return (
    <div>
      <form onSubmit={handleRegister} noValidate>
        <div className="mb-6">
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border-2"
          />
          <div className="flex">
            {errors.name && (
              <span className="text-red-400 text-sm m-2 p-2">
                {errors.name[0]}
              </span>
            )}
          </div>
        </div>

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

        <div className="mb-6">
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Password Confirmation"
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
