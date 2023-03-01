import { createContext, useEffect } from 'react';
import { childrenType } from '@/types/childrenType';
import { signal } from '@preact/signals-react';
import { getCartItems, getCartItemsCount } from '../services/cartService';

export const CartContext = createContext<any>({});

const cartCount = signal(0);
const cartItems = signal(0);

export function CartProvider({ children }: childrenType) {
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
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
