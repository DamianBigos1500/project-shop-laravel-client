import { productType } from '@/types/productType';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

type propsType = {
  product?: productType;
};

export default function ProductReview({ product }: propsType) {
  return (
    <div className="flex justify-between items-center row-start-3 row-end-4">
      <div className="flex items-center justify-center">
        <div className="flex space-x-2 text-yellow-500">
          <AiFillStar className="text-sm" />
          <AiFillStar className="text-sm" />
          <AiFillStar className="text-sm" />
          <AiFillStar className="text-sm" />
          <AiFillStar className="text-sm" />
        </div>

        <div className="pl-2 ">
          <span className="text-gray-900/40 px-2 text-sm">(566 reviews)</span>
        </div>
      </div>
    </div>
  );
}
