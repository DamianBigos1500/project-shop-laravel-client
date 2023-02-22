import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from '@/lib/axios';

export default function CardLayout() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get('http://localhost:8000/api/products');
        setProducts(data.data.products.data);
      } catch (error) {}
    };
    getData();
  }, []);

  if (products.length === 0) return 'NotFound';
  console.log(products);

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {products.map((product: any) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
