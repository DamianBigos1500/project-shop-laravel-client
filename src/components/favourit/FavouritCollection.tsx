import React from 'react';
import FavouritProduct from './FavouritProduct';

export default function FavouritCollection({ favouritItem }: any) {
  return (
    <div>
      <div className="font-semibold">{favouritItem.name}</div>

      {favouritItem.products.map((product: any) => (
        <FavouritProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
