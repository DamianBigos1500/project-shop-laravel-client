import { motion } from 'framer-motion';

export default function Backdrop({ closeModal }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      onClick={closeModal}
      className="fixed w-screen h-screen inset-0 bg-black/60 z-20 backdrop-blur-[0.8px]"
    />
  );
}
