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
      animate={{ y: 0, opacity: 1, transition: { duration: 0.15 } }}
      exit={{ y: '100%', opacity: 0.4, transition: { duration: 0.15 } }}
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
            className="absolute top-[2vh] right-[-1px] p-2 w-16 rounded-l-lg border border-gray-500 border-r-transparent hover:bg-gray-300 bg-white text-black transition duration-300 trans"
            onClick={() => setShowGalery((prev: boolean) => !prev)}
          >
            <BiArrowToLeft
              className={`"text-center text-lg ${showGalery && 'scale-[-1]'}`}
            />
          </div>
          <img
            src={process.env.NEXT_PUBLIC_BACKEND_IMG_URL + images[activeImage].filename}
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
            <FiChevronRight className=" text-[5vh] cursor-pointer" />
          </div>
        </div>

        {/* Right */}
        <AnimatePresence initial={false}>
          {showGalery && (
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: '500px',
                transition: { duration: 0.15 },
              }}
              exit={{ width: 0, transition: { duration: 0.15 } }}
              className="w-[500px] border-l border-black/40 h-screen overflow-y-scroll"
            >
              <div className="p-5 grid grid-cols-4 gap-2 ">
                {images.map((_image: string, index: number) => (
                  <img
                    key={index}
                    src={process.env.NEXT_PUBLIC_BACKEND_IMG_URL + images[index].filename}
                    onClick={() => setImageShow(index)}
                    alt={'product detail image ' + index}
                    className={` w-full aspect-[10_/_12] cursor-pointer rounded-md border hover:border-gray-600 transform-border duration-300 ${
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
