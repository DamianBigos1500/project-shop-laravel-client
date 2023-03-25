import axios from '@/lib/axios';

export const favouritService = {
  getFavourit: async () => {
    return await axios.get('/api/favourit');
  },

  createFavourit: async (listName: string) => {
    return await axios.post('/api/favourit', { name: listName });
  },

  deleteFavourit: async (collectionId: number) => {
    return await axios.delete('/api/favourit/' + collectionId);
  },

  patchFavouritCollection: async (collectionId: number) => {
    return await axios.delete('/api/favourit/' + collectionId);
  },
};
