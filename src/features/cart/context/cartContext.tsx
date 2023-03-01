import { createContext, useEffect, useState } from 'react';
import { childrenType } from '@/types/childrenType';
import { signal } from '@preact/signals-react';
import {
  addToCart,
  clearCart,
  getCartItems,
  getCartItemsCount,
} from '../services/cartService';

export const CartContext = createContext<any>({});

const cartCount = signal(0);
const cartItems = signal([]);

export function CartProvider({ children }: childrenType) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getData() {
      const [res1, res2] = await Promise.all([
        getCartItemsCount(),
        getCartItems(),
      ]);

      cartCount.value = res1.data.itemsCount;
      cartItems.value = res2.data.cartItems;
    }

    getData();
  }, [count]);

  const addItemToCart = async (data: any) => {
    await addToCart(data);
    setCount((prev) => ++prev);
  };

  const removeItems = async (data: any) => {
    await clearCart();
    setCount((prev) => ++prev);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount: cartCount.value,
        cartItems: cartItems.value,
        removeItems,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
