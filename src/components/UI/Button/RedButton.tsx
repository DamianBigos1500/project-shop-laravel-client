import React from 'react';

export default function RedButton({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-red-500 to-red-900 text-white rounded-md px-4 py-2 ml-4 flex items-center hover:bg-red-900 transition-all duration-200"
    >
      {children}
    </button>
  );
}
