import React, { useEffect } from 'react';
import { BiUser, BiHeart } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import HeaderIcon from '../../UI/HeaderIcon';
import useAuthContext from '@/context/useAuthContext';
import useCartContext from '@/context/useCartContext';

export default function HeaderIcons() {
  const { user } = useAuthContext();
  const { cartCount } = useCartContext();

  return (
    <div className="relative sm:px-6 px-4 flex items-center justify-end">
      <div className="flex items-center sm:w-auto gap-x-5">
        <Link href="/login">
          <BiUser className="text-3xl hover:text-violet-600 transition-colors duration-300 " />
        </Link>
        {user && (
          <Link href="/favourit" className="relative">
            <BiHeart className="text-3xl hover:text-violet-600 transition-colors duration-300" />
          </Link>
        )}
        <Link href="/cart" className="relative">
          <HeaderIcon number={cartCount}>
            <AiOutlineShoppingCart className="text-3xl hover:text-violet-600 transition-colors duration-300" />
          </HeaderIcon>
        </Link>
      </div>
    </div>
  );
}
