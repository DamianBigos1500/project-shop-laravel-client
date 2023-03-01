import axios from '@/lib/axios';

export const getCartItems = async () => {
  return await axios.get('/api/cart');
};
export const getCartItemsCount = async () => {
  return await axios.get('/api/cart-count');
};

export const addToCart = async (data: any) => {
  return await axios.post('/api/cart', data);
};

export const moveCartToDb = async () => {
  return await axios.post('/api/move-cart');
};

export const clearCart = async () => {
  return await axios.delete('/api/cart');
};
