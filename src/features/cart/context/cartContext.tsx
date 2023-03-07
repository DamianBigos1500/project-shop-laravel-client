import { createContext, useEffect, useState } from 'react';
import { childrenType } from '@/types/childrenType';
import { useSignal } from '@preact/signals-react';
import {
  addToCart,
  clearCart,
  deleteCartItem,
  getCartItems,
} from '../services/cartService';
import { addToCartType } from '@/types/cartItemType';

export const CartContext = createContext<any>({});

export function CartProvider({ children }: childrenType) {
  const cartCount = useSignal(0);
  const cartItems = useSignal([]);
  const loading = useSignal(true);
  const addCartLoading = useSignal(0);

  async function getData() {
    loading.value = true;

    const res = await getCartItems();

    cartCount.value = res.data.cartCount;
    cartItems.value = res.data.cartItems;

    loading.value = false;
  }

  const addItemToCart = async ({ product_id, quantity = 1 }: addToCartType) => {
    addCartLoading.value = product_id;

    const res = await addToCart({ product_id, quantity });
    cartCount.value = res.data.cartCount;
    cartItems.value = res.data.cartItems;

    addCartLoading.value = 0;
  };

  const removeItems = async () => {
    await clearCart();
    cartCount.value = 0;
    cartItems.value = [];
  };

  const removeItemById = async (productId: number) => {
    const res = await deleteCartItem(productId);
    cartCount.value = res.data.cartCount;
    cartItems.value = res.data.cartItems;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartCount: cartCount.value,
        cartItems: cartItems.value,
        loading: loading.value,
        addCartLoading: addCartLoading.value,
        removeItems,
        removeItemById,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
