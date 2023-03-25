import React from 'react';
import FavouritProduct from './FavouritProduct';
import { favouritCollectionType } from '@/types/favouritCollectionType';
import { productType } from '@/types/productType';

type propsType = {
  favouritCollection: favouritCollectionType;
  removeFavouritCollection: (favouritCollectionId: number) => void;
  removeItem: (data: { collection_id: number; product_id: number }) => void;
};

export default function FavouritCollection({
  favouritCollection,
  removeFavouritCollection,
  removeItem,
}: propsType) {
  const removeFavouritItem = (productId: number) => {
    removeItem({
      collection_id: favouritCollection.id,
      product_id: productId,
    });
  };

  return (
    <div className="mt-8 gradient-favourit p-4">
      <div className="flex justify-between">
        <div />
        <div className="font-semibold">{favouritCollection.name}</div>
        <button
          className="font-semibold text-red-500"
          type="button"
          onClick={() => removeFavouritCollection(favouritCollection.id)}
        >
          Delete Collection
        </button>
      </div>

      {favouritCollection?.products.length > 0 ? (
        favouritCollection?.products.map((product: productType) => (
          <FavouritProduct
            key={product.id}
            product={product}
            removeFavouritItem={removeFavouritItem}
          />
        ))
      ) : (
        <div className="p-2 flex text-gray-500">
          You don't add any favourit product here
        </div>
      )}
    </div>
  );
}
