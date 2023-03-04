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
  const changeQty = (e: any) => {
    handleChange(e.target.value ?? 1);
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        className="border border-gray-600 rounded-t-3xl  rounded-b-3xl h-[3rem] w-[6rem] flex items-center pl-8 cursor-pointer outline-none"
        value={quantity}
        onChange={changeQty}
        onBlur={onBlur}
      />

      <ul
        className={`absolute bg-white rounded-b-3xl border border-gray-600 overflow-hidden `}
      >
        {/* {options.map((option) => (
          <li
            key={option.value}
            className="hover:bg-gray-400 h-[2rem] w-[5.9rem] flex items-center pl-8 "
          >
            <label htmlFor={'quantity' + option.value} className="">
              {option.label}
            </label>
            <input
              id={'quantity' + option.value}
              name={'quantity' + option.value}
              value={option.value}
              type="radio"
              onChange={changeQty}
              className="hidden"
            />
          </li>
        ))} */}
      </ul>
    </form>
  );
}
