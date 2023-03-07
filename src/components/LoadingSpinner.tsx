import React from 'react';

type propsType = {
  className?: string;
};

export default function LoadingSpinner({ className = 'h-8 w-8' }: propsType) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`inline-block ${className} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
