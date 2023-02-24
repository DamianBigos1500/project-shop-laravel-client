import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import ProductCard from './ProductCard';

export default function CardLayout() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get('/api/products');
        setProducts(data.data.products.data);
      } catch (error) {}
    };
    getData();
  }, []);

  if (products.length === 0) return <>NotFound</>;

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {products.map((product: any) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
