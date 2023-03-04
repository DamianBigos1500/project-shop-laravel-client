import { useSignal } from '@preact/signals-react';
import React from 'react';

const options = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
];

export default function SelectQuantity() {
  const quantity = useSignal(1);

  console.log(quantity.value);

  const setQuantityValue = (e: any) => {
    quantity.value = e.target.value;
  };

  return (
    <select
      name="quantity"
      id="quantity"
      value={quantity.value}
      onChange={setQuantityValue}
      className="min-w-[5rem] h-[3rem] text-center rounded-3xl bg-white border"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
