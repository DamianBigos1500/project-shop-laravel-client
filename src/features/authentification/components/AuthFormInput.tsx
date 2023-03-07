import { onChangeType } from '@/types/onChangeType';
import React, { ChangeEvent } from 'react';

type props = {
  id: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: onChangeType) => void;
  error?: string[];
  ToggleIcon?: any;
};

export default function AuthFormInput({
  id,
  name,
  value,
  type,
  placeholder,
  onChange,
  error,
  ToggleIcon,
}: props) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 text-sm focus:outline-none focus:borer-rose-600"
        placeholder={placeholder}
      />

      {(name === 'password' || name === 'password_confirmation') && (
        <span className="absolute right-0 top-3 text-gray-400 text-xl cursor-pointer">
          {ToggleIcon}
        </span>
      )}

      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm"
      >
        {placeholder}
      </label>

      {error && <span className="text-red-500 text-sm">{error[0]}</span>}
    </div>
  );
}
