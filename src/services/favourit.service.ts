import axios from '@/lib/axios';

export const favouritService = {
  getFavourit: async () => {
    return await axios.get('/api/favourit');
  },

  createFavourit: async (listName: any) => {
    return await axios.post('/api/favourit', { name: listName });
  },

  deleteFavourit: async (collection_id: any) => {
    return await axios.delete('/api/favourit/' + collection_id);
  },

  patchFavouritCollection: async (collection_id: any) => {
    return await axios.delete('/api/favourit/' + collection_id);
  },
};
