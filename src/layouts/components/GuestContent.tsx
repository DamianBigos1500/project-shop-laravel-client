import { childrenType } from '@/types/childrenType';
import React from 'react';

export default function GuestContent({ children }: childrenType) {
  return <div className="max-w-7xl mx-auto px-8">{children}</div>;
}
