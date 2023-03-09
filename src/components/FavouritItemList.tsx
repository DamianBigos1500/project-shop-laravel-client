import { useState } from 'react';

export default function FavouritItemList({
  collection,
  isAdded,
  addItem,
  removeItem,
}: any) {
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
    <div className="">
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
