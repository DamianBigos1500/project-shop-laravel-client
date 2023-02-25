import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: any) {
  if (products.length === 0) return <>NotFound</>;

  return (
    <div className="mt-10 xmd:flex container mx-auto">
      <div className=" grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.data.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
