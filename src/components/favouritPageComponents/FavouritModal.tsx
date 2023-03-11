import { motion } from 'framer-motion';
import React from 'react';
import FavouritItemList from '../detailPageComponents/FavouritItemList';
import useFavouritItems from '@/hooks/useFavouritItems';
import FavouritModalCard from './FavouritModalCard';
import FavouritListForm from './FavouritListForm';

export default function FavouritModal({ productId }: any) {
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

  return favourit.length > 0 ? (
    <FavouritModalCard>
      {favourit.map((collection: any) => (
        <FavouritItemList
          key={collection.id}
          collection={collection}
          addItem={addItem}
          isAdded={isProductInCollection(collection.id, productId)}
          removeItem={removeItem}
        />
      ))}
      <FavouritListForm addFavouritCollection={addFavouritCollection} />
    </FavouritModalCard>
  ) : (
    <div></div>
  );
}
