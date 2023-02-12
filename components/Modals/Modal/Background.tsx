import React from 'react';

export default function Background({closeModal}: any) {
  return (
    <div
      onClick={() => closeModal((prev: any) => !prev)}
      className="fixed bg-black/40 w-screen h-screen inset-0 z-40"
    />
  );
}
