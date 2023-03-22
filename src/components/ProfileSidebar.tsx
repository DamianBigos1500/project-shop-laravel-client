import React from 'react';

export default function ProfileSidebar({ subsite, setSubsite }: any) {
  return (
    <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start">
      <button
        onClick={() => setSubsite(1)}
        className={`text-sm p-2 bg-orange-400  text-center rounded-xl font-semibold duration-200 hover:bg-red-500 text-white`}
      >
        User Information
      </button>

      <button
        onClick={() => setSubsite(2)}
        className={`text-sm p-2 bg-orange-400  text-center rounded-xl font-semibold duration-200 hover:bg-red-500 text-white`}
      >
        All Orders
      </button>

      <button
        onClick={() => setSubsite(3)}
        className={`text-sm p-2 bg-orange-400 text-center rounded-xl font-semibold duration-200 hover:bg-red-500 text-white`}
      >
        Reset passowrd
      </button>
    </div>
  );
}
