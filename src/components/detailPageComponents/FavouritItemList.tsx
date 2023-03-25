import { collectionType } from '@/types/favouritCollectionType';
import { useState } from 'react';

type propsType = {
  collection: collectionType;
  isAdded: boolean;
  addItem(collectionId: number): void;
  removeItem(collectionId: number): void;
};

export default function FavouritItemList({
  collection,
  isAdded,
  addItem,
  removeItem,
}: propsType) {
  const [isChecked, setIsChecked] = useState(isAdded);

  const handleCheckbox = (collection_id: number, isChecked: boolean) => {
    setIsChecked((prev: boolean) => !prev);
    if (isChecked) {
      addItem(collection_id);
    } else {
      removeItem(collection_id);
    }
  };

  return (
    <div className="py-2">
      <input
        id={`product_in_collection_${collection.id}`}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          handleCheckbox(collection.id, e.target.checked);
        }}
      />
      <label
        htmlFor={`product_in_collection_${collection.id}`}
        className="pl-2"
      >
        {collection.name}
      </label>
    </div>
  );
}
