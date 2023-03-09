import { childrenType } from '@/types/childrenType';
import React from 'react';

export default function GuestContent({ children }: childrenType) {
  return <div className=" w-full max-w-7xl mx-auto px-8 mt-[10rem]">{children}</div>;
}
