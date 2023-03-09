import { motion } from 'framer-motion';
import React from 'react';
import FavouritItemList from '../FavouritItemList';
import useFavouritItems from '@/hooks/useFavouritItems';
import FavouritModalCard from './FavouritModalCard';

export default function FavouritModal({ productId }: any) {
  const {
    favourit,
    addItemAsFavourit,
    deleteFavouritItem,
    isProductInCollection,
  } = useFavouritItems();

  const addItem = (collectionId: number) => {
    addItemAsFavourit({ collection_id: collectionId, product_id: productId });
  };

  const removeItem = (collectionId: number) => {
    deleteFavouritItem({ collection_id: collectionId, product_id: productId });
  };

  return (
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
    </FavouritModalCard>
  );
}
