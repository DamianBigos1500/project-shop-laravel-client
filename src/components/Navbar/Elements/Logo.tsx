import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="col-start-1 col-end-2">
      <div className="flex items-center justify-start sm:px-6 px-4 py-2 ">
        <Link
          href="/"
          className="font-acme whitespace-nowrap font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-500"
        >
          Night's Shop
        </Link>
      </div>
    </div>
  );
}
