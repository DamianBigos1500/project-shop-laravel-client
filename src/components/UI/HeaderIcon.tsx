import React, { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
  number: number;
};

export default function HeaderIcon({ children, number }: propsType) {
  return (
    <span className=" w-[3rem] h-[3rem]">
      {children}
      {number > 0 && (
        <div className="absolute right-[-0.4rem] top-[-0.4rem] bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-white text-sm">
          {number}
        </div>
      )}
    </span>
  );
}
