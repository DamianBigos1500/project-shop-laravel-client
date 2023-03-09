import axios from '@/lib/axios';

export async function getFavourit() {
  return axios.get('/api/favourit');
}

export async function postFavourit({
  collection_id,
  product_id,
}: postFavouritItemType) {
  return axios.post('/api/favourit-product/', {
    collection_id,
    product_id,
  });
}

export async function deleteFavourit({
  collection_id,
  product_id,
}: postFavouritItemType) {
  return axios.delete(
    '/api/favourit-product/' + collection_id + '/' + product_id
  );
}
