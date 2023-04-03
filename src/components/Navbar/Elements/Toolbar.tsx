import React from 'react';
import useAuthContext from '../../../context/useAuthContext';
import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';
import { BsTelephoneForward } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollPosition from '@/hooks/useScrollPosition';

const navigation = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/dashboard', name: 'Dashboard' },
  { href: '/details', name: 'Details' },
  { href: '/contact', name: 'Contact' },
];

export default function Toolobar() {
  const { user, logout } = useAuthContext();
  const scrollPosition = useScrollPosition(100);
  const isScrollPositive = scrollPosition > 10;

  return (
    <>
      <AnimatePresence initial={false}>
        {!isScrollPositive && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: '2.2rem',
              opacity: 1,
              transition: { duration: 0.2 },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, delay: 0.2 },
            }}
            className={`max-w-[90rem] mx-auto ${isScrollPositive && ''}`}
          >
            <div className="flex justify-center items-center h-10">
              <div className="flex pl-6 items-center text-nowrap">
                <BiCategory />
                <span className="font-semibold px-4">Categories</span>
              </div>

              <ul className="md:flex justify-center bg-white flex-row sm:gap-x-3 md:text-sm font-semibold gap-x-5 w-full whitespace-nowrap hidden">
                {navigation.map((navItem) => (
                  <li
                    key={navItem.name}
                    className="hover:text-blue-700 transition-colors duration-200"
                  >
                    <Link href={navItem.href}>{navItem.name}</Link>
                  </li>
                ))}
                {user && (
                  <>
                    <li className="hover:text-blue-700 transition-colors duration-200">
                      <Link href="/profile">My Account</Link>
                    </li>
                    <li className="hover:text-blue-700 transition-colors duration-200">
                      <button onClick={logout}>Logout</button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
