import axios from '@/lib/axios';

export async function getFavourit() {
  return await axios.get('/api/favourit');
}

type postFavouritType = {
  collection_id: number;
  product_id: number;
};

export async function postFavourit({
  collection_id,
  product_id,
}: postFavouritType) {
  return await axios.post('/api/favourit', {
    collection_id,
    product_id,
  });
}

export async function deleteFavourit({
  collection_id,
  product_id,
}: postFavouritType) {
  return await axios.delete('/api/favourit/' + collection_id + product_id);
}

// export async function getFavourit() {
//   return await axios.get('/api/favourit');
// }
