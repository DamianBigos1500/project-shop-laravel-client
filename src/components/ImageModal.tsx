import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BiArrowToLeft } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

export default function ImageModal({
  images,
  activeImage,
  setImageShow,
  closeModal,
}: any) {
  const [showGalery, setShowGalery] = useState(true);

  const handleImageChange = (value: number) => {
    setImageShow(
      (prev: number) => (prev + value + images.length) % images.length
    );
  };

  return (
    <motion.div
      initial={{ y: '100%', opacity: 0.4 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      exit={{ y: '100%', opacity: 0.4, transition: { duration: 0.2 } }}
      className="fixed bg-white inset-0 z-40"
    >
      <div className="flex">
        {/* Left */}
        <div className="relative w-full h-screen bg-white">
          <div
            className="absolute top-[1vh] left-[1vh] p-[0.6vh] rounded-full hover:bg-black/30 bg-black/10 text-black transition duration-300"
            onClick={() => closeModal()}
          >
            <IoCloseOutline className="text-[5vh] cursor-pointer" />
          </div>
          <div
            className="absolute top-[1vh] right-0 p-2  w-16 rounded-l-lg border border-black/40 hover:bg-black/30 text-black transition duration-300 trans"
            onClick={() => setShowGalery((prev: boolean) => !prev)}
          >
            <BiArrowToLeft className='text-center' />
          </div>
          <img
            src={images[activeImage]}
            alt="product detail image"
            className="w-full h-full object-contain border-transparent col-start-1 col-end-7"
          />

          <div
            className="absolute top-[50%] left-[1vh] translate-y-[-50%] p-[0.6vh] rounded-full shadow-2xl hover:bg-black/30 bg-black/10 transition duration-300"
            onClick={() => handleImageChange(-1)}
          >
            <FiChevronLeft className="text-[5vh] cursor-pointer" />
          </div>

          <div
            className="absolute top-[50%] right-[1vh] translate-y-[-50%] p-[0.6vh] rounded-full shadow-2xl hover:bg-black/30 bg-black/10 text-black transition duration-300"
            onClick={() => handleImageChange(+1)}
          >
            <FiChevronRight className="text-[5vh] cursor-pointer" />
          </div>
        </div>

        {/* Right */}
        <AnimatePresence>
          {showGalery && (
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: '500px',
                transition: { duration: 0.1 },
              }}
              exit={{ width: 0, transition: { duration: 0.1 } }}
              className="w-[500px] border-l border-black/40 h-screen overflow-y-scroll"
            >
              <div className="p-5 grid grid-cols-4 gap-2 ">
                {images.map((_image: string, index: number) => (
                  <img
                    key={index}
                    src={images[index]}
                    onClick={() => setImageShow(index)}
                    alt={'product detail image ' + index}
                    className={`cursor-pointer rounded-md border hover:border-gray-600 transform-border duration-300 ${
                      index === activeImage && 'border-gray-600 '
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
