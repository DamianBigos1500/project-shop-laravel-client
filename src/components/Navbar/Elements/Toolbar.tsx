import React, { useEffect } from 'react';
import useAuthContext from '../../../context/useAuthContext';
import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';
import { BsTelephoneForward } from 'react-icons/bs';
import { useScroll } from 'framer-motion';

export default function Toolobar() {
  const { user, logout } = useAuthContext();
  const { scrollYProgress } = useScroll();

  // if (scrollYProgress) console.log(scrollYProgress);

  return (
    <nav className="border-d-1 my-2 border-b">
      <div className="flex justify-center items-center  h-10">
        <div className="flex pl-6 items-center text-nowrap">
          <BiCategory />
          <span className="font-semibold px-4">Categories</span>
        </div>

        <ul className="md:flex justify-center bg-white flex-row sm:gap-x-3  md:text-sm font-semibold gap-x-5 w-full whitespace-nowrap hidden">
          <li className="hover:text-orange-600 transition-colors duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-200">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-200">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-200">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-200">
            <Link href="/details">Details</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-200">
            <Link href="/contact">Contact</Link>
          </li>
          {user && (
            <>
              <li className="hover:text-orange-600 transition-colors duration-200">
                <Link href="/profile">My Account</Link>
              </li>
              <li className="hover:text-orange-600 transition-colors duration-200">
                <button onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>

        <div className="flex pl-6 items-center text-nowrap">
          <BsTelephoneForward />
          <span className="font-semibold px-4">0000-000-000</span>
        </div>
      </div>
    </nav>
  );
}
