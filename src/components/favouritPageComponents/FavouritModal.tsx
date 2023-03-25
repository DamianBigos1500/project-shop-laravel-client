import React from 'react';
import FavouritItemList from '../detailPageComponents/FavouritItemList';
import useFavouritItems from '@/hooks/useFavouritItems';
import FavouritModalCard from './FavouritModalCard';
import FavouritListForm from './FavouritListForm';
import { collectionType } from '@/types/favouritCollectionType';

export default function FavouritModal({ productId }: { productId: number }) {
  const {
    favourit,
    isProductInCollection,
    addItemAsFavourit,
    deleteFavouritItem,
    addFavouritCollection,
  } = useFavouritItems();

  const addItem = (collectionId: number) => {
    addItemAsFavourit({ collection_id: collectionId, product_id: productId });
  };

  const removeItem = (collectionId: number) => {
    deleteFavouritItem({ collection_id: collectionId, product_id: productId });
  };

  return (
    <FavouritModalCard>
      {favourit.length > 0 &&
        favourit.map((collection: collectionType) => (
          <FavouritItemList
            key={collection.id}
            collection={collection}
            addItem={addItem}
            isAdded={isProductInCollection(collection.id, productId)}
            removeItem={removeItem}
          />
        ))}
      <FavouritListForm
        addFavouritCollection={addFavouritCollection}
        closeModal={() => {}}
      />
    </FavouritModalCard>
  );
}
