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

  async function getData() {
    loading.value = true;

    const res = await getCartItems();

    cartCount.value = res.data.cartCount;
    cartItems.value = res.data.cartItems;

    loading.value = false;
  }

  const addItemToCart = async ({ product_id, quantity = 1 }: addToCartType) => {
    const res = await addToCart({ product_id, quantity });
    console.log(res.data.cartItems);
    cartCount.value = res.data.cartCount;
    cartItems.value = res.data.cartItems;
  };

  const removeItems = async () => {
    await clearCart();
    cartCount.value = 0;
    cartItems.value = [];
  };

  const removeItemById = async (productId: number) => {
    await deleteCartItem(productId);
    cartCount.value = 0;
    cartItems.value = [];
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartCount: cartCount.value,
        cartItems: cartItems.value,
        removeItems,
        addItemToCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
