import React from 'react';
import { BiUser, BiHeart } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import HeaderIcon from '../../UI/HeaderIcon';
import useAuthContext from '../../../context/authContext';

export default function HeaderIcons() {
  const { user, logout } = useAuthContext();

  return (
    <div className="relative sm:px-6 px-4 flex items-center justify-end">
      <div className="flex items-center sm:w-auto gap-x-5">
        <Link href="/login">
          <BiUser className="text-3xl hover:text-orange-600 transition-colors duration-300 " />
        </Link>
        {user && (
          <Link href="/favourit">
            <HeaderIcon number="2">
              <BiHeart className="text-3xl hover:text-orange-600 transition-colors duration-300" />
            </HeaderIcon>
          </Link>
        )}
        <Link href="/cart">
          <HeaderIcon number="7">
            <AiOutlineShoppingCart className="text-3xl hover:text-orange-600 transition-colors duration-300" />
          </HeaderIcon>
        </Link>
      </div>
    </div>
  );
}
