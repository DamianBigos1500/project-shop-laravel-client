import { onChangeType } from '@/types/onChangeType';
import { onSubmitType } from '@/types/onSubmitType';
import React, { useState } from 'react';

const options = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: '4+',
    value: 4,
  },
];

type propsType = {
  onSubmit(e: onSubmitType): void;
  handleChange(e: onChangeType): void;
  onBlur(): void;
  quantity: number;
};

export default function SelectQuantity({
  handleChange,
  quantity,
  onBlur = () => {},
  onSubmit = (e: onSubmitType) => {
    e.preventDefault;
  },
}: propsType) {
  const changeQty = (e: onChangeType) => {
    handleChange(e.target.value ?? 1);
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        className="border border-gray-600 rounded-t-3xl  rounded-b-3xl h-[2.4rem] w-[6rem] flex items-center pl-8 cursor-pointer outline-none"
        value={quantity}
        onChange={changeQty}
        onBlur={onBlur}
      />
    </form>
  );
}
