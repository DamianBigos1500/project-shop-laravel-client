import { childrenType } from '@/types/childrenType';
import React from 'react';

export default function AuthSubmitButton({ children }: childrenType) {
  return (
    <button className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl px-6 py-2 text-sm font-semibold whitespace-nowrap">
      {children}
    </button>
  );
}
