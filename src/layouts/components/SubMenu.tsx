import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

type childrensType = {
  name: string;
  href: string;
};

export default function SubMenu({
  data,
}: {
  data: { name: string; icon: any; childrens: childrensType[] };
}) {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        className={`link ${router.pathname.includes(data.name) && 'active'}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className="min-w-max" />
        <div className="capitalize flex-1">
          <span>{data.name}</span>
        </div>
        <IoIosArrowDown
          className={`duration-200 ${subMenuOpen && 'rotate-180'}`}
        />
      </li>

      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: 'fit-content',
              }
            : {
                height: 0,
              }
        }
        className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0"
      >
        {data.childrens.map((children: childrensType) => (
          <li key={children.name}>
            <Link href={children.href} className="link">
              {children.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
}
