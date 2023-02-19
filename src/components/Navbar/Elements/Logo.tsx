import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="col-start-1 col-end-2">
      <div className="flex items-center justify-start sm:px-6 px-4 py-2 ">
        <Link href="/" className="whitespace-nowrap font-semibold text-3xl bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
          Night's Shop
        </Link>
      </div>
    </div>
  );
}
