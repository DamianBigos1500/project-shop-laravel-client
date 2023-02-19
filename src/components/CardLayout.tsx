import React from 'react';
import ProductCard from './ProductCard';

export default function CardLayout() {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
