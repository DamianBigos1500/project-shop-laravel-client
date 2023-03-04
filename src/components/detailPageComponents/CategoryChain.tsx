import { productType } from '@/types/productType';
import Link from 'next/link';
import React from 'react';

type propsType = {
  product: productType;
};

export default function CategoryChain({ product }: propsType) {
  return (
    <div className="text-sm flex items-center">
      <Link href={`/category/${product?.category?.title}`}>
        <span className="text-gray-500 cursor-pointer">
          {product?.category?.title} &nbsp;
        </span>
      </Link>
      <span> / &nbsp;</span>
      <Link
        href={`/category/${product?.category?.title}/${product?.category?.parent?.title}`}
      >
        <span className="text-gray-500 cursor-pointer">
          {product?.category?.parent?.title} &nbsp;
        </span>
      </Link>
      <span> / &nbsp;</span>
      <span>{product.name}</span>
    </div>
  );
}
