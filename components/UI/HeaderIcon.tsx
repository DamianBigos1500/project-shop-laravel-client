import React from 'react';

export default function HeaderIcon({ children, number }: any) {
  return (
    <span className="relative">
      {children}
      {number && (
        <div className="absolute left-[1.25rem] top-[0.8rem] bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-white text-sm">
          {number}
        </div>
      )}
    </span>
  );
}
