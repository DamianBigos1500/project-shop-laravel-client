import { createContext, useEffect, useState } from 'react';
import { childrenType } from '@/types/childrenType';
import { useSignal } from '@preact/signals-react';
import { CartService } from '../services/cart.service';
import { addToCartType, cartItemType } from '@/types/cartItemType';

export const CartContext = createContext<any>({});

export function CartProvider({ children }: childrenType) {
  const [cartItems, setCartItems] = useState<cartItemType[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotalSum, setCartTotalSum] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [addCartLoading, setAddCartLoading] = useState<number>(0);

  async function getData() {
    setLoading(true);

    try {
      const res = await CartService.getCart();
      setCart(res.data);
    } catch (error) {}

    setLoading(false);
  }

  const addItemToCart = async ({ product_id, quantity = 1 }: addToCartType) => {
    setAddCartLoading(product_id);

    let returnedQty = quantity;
    try {
      const res = await CartService.addToCart({ product_id, quantity });
      setCart(res.data);

      returnedQty = res.data.itemQty;
    } catch (error) {}
    setAddCartLoading(0);
    return returnedQty;
  };

  const removeItems = async () => {
    try {
      await CartService.clearCart();
      setCartItems([]);
      setCartCount(0);
      setCartTotalSum(0);
    } catch (error) {}
  };

  const removeItemById = async (productId: number) => {
    try {
      const res = await CartService.deleteCartItem(productId);
      setCart(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  function setCart(data: any) {
    setCartCount(data.cartCount);
    setCartItems(data.cartItems);
    setCartTotalSum(data.cartTotalSum);
  }

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        cartTotalSum,
        loading,
        addCartLoading,
        removeItems,
        removeItemById,
        addItemToCart,
        getData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
