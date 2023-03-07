import React from 'react';
import FavouritProduct from './FavouritProduct';
import { deleteFavourit } from 'src/services/FavouritItemService';
import { deleteFavouritCollection } from 'src/services/FavouritCollectionService';

export default function FavouritCollection({ favouritCollection }: any) {
  const deleteFavouritProduct = (fav_item_id: number) => {
    deleteFavourit({
      collection_id: favouritCollection.id,
      product_id: fav_item_id,
    });
  };

  const removeFavouritCollection = () => {
    deleteFavouritCollection(favouritCollection.id);
  };

  return (
    <div className="mt-8 gradient-favourit p-4">
      <div className="flex justify-between">
        <div />
        <div className="font-semibold">{favouritCollection.name}</div>
        <button
          className="font-semibold"
          type="button"
          onClick={() => removeFavouritCollection}
        >
          Delete Collection
        </button>
      </div>

      {favouritCollection.products.map((product: any) => (
        <>
          <FavouritProduct
            key={product.id}
            product={product}
            deleteFavouritProduct={deleteFavouritProduct}
          />
        </>
      ))}
    </div>
  );
}
