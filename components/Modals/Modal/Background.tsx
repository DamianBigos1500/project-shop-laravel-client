import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Background({ closeModal }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      onClick={() => closeModal()}
      className="fixed bg-black/40 w-screen h-screen inset-0 z-40"
    />
  );
}
