import { childrenType } from '@/types/childrenType';
import { onSubmitType } from '@/types/onSubmitType';
import React, { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
  onSubmit?: (e: onSubmitType) => void;
};

export default function AuthSubmitButton({
  children,
  onSubmit = () => {},
}: propsType) {
  return (
    <button
      onSubmit={onSubmit}
      className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl px-6 py-2 text-sm font-semibold whitespace-nowrap"
    >
      {children}
    </button>
  );
}
