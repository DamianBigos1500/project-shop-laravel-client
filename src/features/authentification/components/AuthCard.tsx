import { childrenType } from '@/types/childrenType';
import React from 'react';

export default function AuthCard({ children }: childrenType) {
  return (
    <div className="relative py-3 sm:max-w-xl mx-auto mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:py-14 sm:px-18">
        {children}
      </div>
    </div>
  );
}
