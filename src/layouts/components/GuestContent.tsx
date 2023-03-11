import { childrenType } from '@/types/childrenType';
import React from 'react';

export default function GuestContent({ children }: childrenType) {
  return <div className=" w-full max-w-7xl mx-auto px-8 md:mt-40 mt-60">{children}</div>;
}
