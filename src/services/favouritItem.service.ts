import axios from '@/lib/axios';

export const favouritItemService = {
  createFavouritItem: async ({ collection_id, product_id }: postFavouritItemType) => {
    return await axios.post('/api/favourit-product/', {
      collection_id,
      product_id,
    });
  },

  deleteFavouritItem: async ({
    collection_id,
    product_id,
  }: postFavouritItemType) => {
    return await axios.delete(
      '/api/favourit-product/' + collection_id + '/' + product_id
    );
  },
};
