import axios from '@/lib/axios';
import { addToCartType } from '@/types/cartItemType';

export const CartService = {
  getCart: async () => {
    return await axios.get('api/cart');
  },

  getCartCount: async () => {
    return await axios.get('api/cart-count');
  },

  addToCart: async (
    { product_id, quantity }: addToCartType,
    { token }: any
  ) => {
    return await axios.post(
      'api/cart',
      { product_id, quantity },
      {
        headers: { 'X-XSRF-TOKEN': `${token}` },
      }
    );
  },

  moveCartToDb: async () => {
    return await axios.post('api/move-cart');
  },

  clearCart: async () => {
    return await axios.delete('api/cart');
  },

  deleteCartItem: async (productId: number) => {
    return await axios.delete('api/cart/' + productId);
  },
};
