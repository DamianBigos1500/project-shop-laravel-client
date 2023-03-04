import { productType } from '@/types/productType';
import React from 'react';

type propsType = {
  product: productType;
};

export default function FavouritProduct({ product }: propsType) {
  return (
    <div>
      <div className="pl-10">{product.name}</div>
    </div>
  );
}
