import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center font-semibold text-3xl sm:px-8 px-4 py-2 bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
      <Link href="/" className="whitespace-nowrap ">
        Night's Shop
      </Link>
    </div>
  );
}
