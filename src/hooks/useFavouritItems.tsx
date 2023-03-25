import { favouritCollectionType } from '@/types/favouritCollectionType';
import { productType } from '@/types/productType';
import { useEffect, useState } from 'react';
import { favouritService } from 'src/services/favourit.service';
import { favouritItemService } from 'src/services/favouritItem.service';

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
      const res = await favouritService.getFavourit();
      setFavourit(res.data.favourit);
    } catch (error) {}

    setLoading(false);
  };

  const addItemAsFavourit = async ({ ...data }: postFavouritItemType) => {
    console.log({ ...data });
    try {
      await favouritItemService.createFavouritItem({ ...data });
    } catch (error) {}
  };

  const deleteFavouritItem = async ({ ...data }: postFavouritItemType) => {
    try {
      await favouritItemService.deleteFavouritItem({ ...data });
    } catch (error) {
      setError('Cannot remove item');
    }
    setFavourit((prev: favouritCollectionType[]) => {
      return prev.map((collection: favouritCollectionType) => {
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

  const addFavouritCollection = async (listName: string) => {
    try {
      const { data } = await favouritService.createFavourit(listName);
      const newItem = { ...data.favourit, products: [] };

      setFavourit((prev: favouritCollectionType[]) => {
        return [newItem, ...prev];
      });
    } catch (error) {
      setError('Cannot add new favourit product list');
    }
  };

  const removeFavouritCollection = async (collectionId: number) => {
    try {
      await favouritService.deleteFavourit(collectionId);
      setFavourit((prev: favouritCollectionType[]) =>
        prev.filter(
          (collection: favouritCollectionType) => collection.id != collectionId
        )
      );
    } catch (error) {
      setError('Cannot remove collection');
    }
  };

  function isProductInCollection(collectionId: number, productId: number) {
    const collection = favourit.find(
      (collection: favouritCollectionType) => collection.id === collectionId
    );

    if (!collection) return false;
    const product = collection.products.find(
      (product: favouritCollectionType) => product.id === productId
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
