import { CartContext } from '@/features/cart/context/cartContext';
import { useContext } from 'react';

export default function useCartContext() {
  return useContext(CartContext);
}
