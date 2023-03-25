import { motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

type propsType = {
  children: ReactNode;
  name: string;
};

export default function DropdownSidebar({ children, name }: propsType) {
  const [subMenuOpen, setSubMenuOpen] = useState(true);

  return (
    <motion.div className="mt-2">
      <button
        type="button"
        className="hover:bg-blue-100 w-full rounded-xl p-2 flex justify-between items-center "
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <span className="font-medium text-gray-900">{name}</span>
        <span className="ml-6 flex items-center">
          <MdKeyboardArrowDown
            size={24}
            className={`duration-200 ${subMenuOpen && 'rotate-180'}`}
          />
        </span>
      </button>
      <motion.div
        className="overflow-hidden h-0"
        animate={
          subMenuOpen
            ? {
                height: 'fit-content',
              }
            : {
                height: 0,
              }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
