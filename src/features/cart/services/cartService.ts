import axios from '@/lib/axios';
import { addToCartType } from '@/types/cartItemType';

export const getCartItems = async () => {
  return await axios.get('/api/cart');
};
export const getCartItemsCount = async () => {
  return await axios.get('/api/cart-count');
};

export const addToCart = async ({ product_id, quantity }: addToCartType) => {
  return await axios.post('/api/cart', { product_id, quantity });
};

export const moveCartToDb = async () => {
  return await axios.post('/api/move-cart');
};

export const clearCart = async () => {
  return await axios.delete('/api/cart');
};

export const deleteCartItem = async (productId: number) => {
  return await axios.delete('/api/cart/' + productId);
};
