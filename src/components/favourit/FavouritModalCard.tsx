import { childrenType } from '@/types/childrenType';
import { motion } from 'framer-motion';
import React from 'react';

export default function FavouritModalCard({ children }: childrenType) {
  return (
    <motion.div
      initial={{ y: '3rem', x: '50%', opacity: 0 }}
      animate={{
        y: '-70%',
        opacity: 1,
        transition: { duration: 0.3 },
      }}
      exit={{ y: '2rem', opacity: 0, transition: { duration: 0.3 } }}
      className="fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white z-40 rounded-xl p-12"
    >
      {children}
    </motion.div>
  );
}
