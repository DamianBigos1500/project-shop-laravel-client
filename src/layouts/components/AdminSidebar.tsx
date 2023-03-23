import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { TbReportAnalytics } from 'react-icons/tb';
import { SlSettings } from 'react-icons/sl';
import SubMenu from './SubMenu';
import { useMediaQuery } from 'react-responsive';
import { MdMenu } from 'react-icons/md';
import { useRouter } from 'next/router';
import { FiUsers } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';

const subMenusList = [
  {
    name: 'users',
    href: '/dashboard/users',
    icon: FiUsers,
    childrens: [
      { name: 'all user', href: '/dashboard/users' },
      { name: 'create user', href: '/dashboard/users/create' },
    ],
  },
  {
    name: 'products',
    href: '/dashboard/products',
    icon: TbReportAnalytics,
    childrens: [
      { name: 'all products', href: '/dashboard/products' },
      { name: 'create product', href: '/dashboard/products/create' },
    ],
  },
  {
    name: 'categories',
    href: '/dashboard/category',
    icon: BiCategory,
    childrens: [
      { name: 'all category', href: '/dashboard/category' },
      { name: 'create product', href: '/dashboard/category/create' },
    ],
  },
];

export default function DashboardSidebar() {
  const isTab = useMediaQuery({ query: '(max-width: 768px)' });
  const [isOpen, setIsOpen] = useState(isTab ? false : true);
  const router = useRouter();

  useEffect(() => {
    if (isTab) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isTab]);

  // close if routename is changed
  useEffect(() => {
    if (isTab) setIsOpen(false);
  }, [router.pathname]);

  const Sidebar_animation = isTab
    ? {
        // mobile view
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // desktop view
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '4rem',
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div className="h-full shadow-sidebar">
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      ></div>

      <motion.div
        variants={Sidebar_animation}
        initial={{ x: isTab ? -260 : 0 }}
        animate={isOpen ? 'open' : 'closed'}
        className="bg-white text-black  z-[999] w-[16rem] 
    max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        <div
          className={`h-16 flex flex-col items-center justify-center w-full md:text-black text-transparent mt-6 duration-100 ${
            !isOpen && 'opacity-0'
          }`}
        >
          <h1 className="font-semibold text-4xl text-orange-400 whitespace-nowrap">
            Night't Shop
          </h1>
          <span className="font-semibold text-small text-red-500">
            Dashboard
          </span>
        </div>

        <motion.div
          animate={
            isOpen
              ? {
                  x: -0,
                  y: -0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-40 right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>

        <div className="flex flex-col h-full  justify-between">
          <ul
            className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden
         "
          >
            <li>
              <Link href="/" className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Go to shop
              </Link>
            </li>

            <div className="border-y py-5 border-slate-300">
              {subMenusList?.map((menu) => (
                <div key={menu.name} className="flex flex-col gap-1">
                  <SubMenu data={menu} />
                </div>
              ))}
            </div>
          </ul>

          <div>
            <Link href={'/settings'} className="link">
              <SlSettings size={23} className="min-w-max" />
              Settings
            </Link>
          </div>
        </div>
      </motion.div>
      {!isOpen && (
        <div
          className="md:hidden fixed bottom-2 right-4 pointer p-2 rounded-full bg-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdMenu size={25} />
        </div>
      )}
    </div>
  );
}
