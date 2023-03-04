import React from 'react';
import ProductCard from './ProductCard';
import { productType } from '@/types/productType';

export default function ProductGrid({ products }: any) {
  if (products.length === 0) return <>NotFound</>;

  return (
    <div className="mt-6 xmd:flex container mx-auto">
      <div className=" grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.data.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
