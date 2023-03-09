import axios from '@/lib/axios';

export async function createFavouritCollection(listName: any) {
  return axios.post('/api/favourit', {
    name: listName,
  });
}

export async function deleteFavouritCollection(collection_id: any) {
  return axios.delete('/api/favourit/' + collection_id);
}
