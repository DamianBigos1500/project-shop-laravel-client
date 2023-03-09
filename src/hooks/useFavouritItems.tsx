import { productType } from '@/types/productType';
import { useEffect, useState } from 'react';
import {
  createFavouritCollection,
  deleteFavouritCollection,
} from 'src/services/FavouritCollectionService';
import {
  deleteFavourit,
  getFavourit,
  postFavourit,
} from 'src/services/FavouritItemService';

export default function useFavouritItems() {
  const [loading, setLoading] = useState(true);
  const [favourit, setFavourit] = useState<any>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getFavouritItems();
  }, []);

  const getFavouritItems = async () => {
    setLoading(true);
    try {
      const res = await getFavourit();
      setFavourit(res.data.favourit);
    } catch (error) {}

    setLoading(false);
  };

  const addItemAsFavourit = async ({ ...data }: postFavouritItemType) => {
    console.log({ ...data });
    try {
      await postFavourit({ ...data });
    } catch (error) {}
  };

  const deleteFavouritItem = async ({ ...data }: postFavouritItemType) => {
    try {
      await deleteFavourit({ ...data });
    } catch (error) {
      setError('Cannot remove item');
    }
    setFavourit((prev: any) => {
      return prev.map((collection: any) => {
        if (collection.id === data.collection_id) {
          const filteredProducts = collection.products.filter(
            (product: productType) => product.id != data.product_id
          );
          return { ...collection, products: filteredProducts };
        }
        return { ...collection };
      });
    });
  };

  const addFavouritCollection = async (listName: number) => {
    try {
      const { data } = await createFavouritCollection(listName);
      const newItem = { ...data.favourit, products: [] };

      setFavourit((prev: any) => {
        return [newItem, ...prev];
      });
    } catch (error) {
      setError('Cannot add new favourit product list');
    }
  };

  const removeFavouritCollection = async (collectionId: number) => {
    try {
      await deleteFavouritCollection(collectionId);
      setFavourit((prev: any) =>
        prev.filter((collection: any) => collection.id != collectionId)
      );
    } catch (error) {
      setError('Cannot remove collection');
    }
  };

  function isProductInCollection(collectionId: number, productId: number) {
    const collection = favourit.find(
      (collection: any) => collection.id === collectionId
    );

    if (!collection) return false;
    const product = collection.products.find(
      (product: any) => product.id === productId
    );

    if (!product) return false;
    return true;
  }

  return {
    getFavouritItems,
    loading,
    error,
    favourit,
    addFavouritCollection,
    removeFavouritCollection,
    addItemAsFavourit,
    deleteFavouritItem,
    isProductInCollection,
  };
}
