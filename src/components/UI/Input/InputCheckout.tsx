import React, { forwardRef } from 'react';

export const InputCheckout = forwardRef(
  (
    { id, type, placeholder, errors, defaultValue, className = 'w-full' }: any,
    ref: any
  ) => {
    return (
      <div className="relative w-full mt-4">
        <input
          id={id}
          ref={ref}
          className={`peer bg-transparent placeholder-transparent h-10 border-b border-gray-600 text-black text-sm focus:outline-none focus:border-gray-800 ${className} ${
            errors && errors[id] && 'border-red-500'
          }`}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />

        <label
          htmlFor={id}
          className={`absolute left-0 -top-3.5 text-blue-700 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm cursor-text whitespace-nowrap`}
        >
          {placeholder}
        </label>
        {errors && errors[id] && (
          <div className="text-sm text-red-500">{errors[id]}</div>
        )}
      </div>
    );
  }
);
