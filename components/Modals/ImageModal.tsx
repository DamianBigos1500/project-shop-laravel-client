import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';
import Modal from './Modal/Modal';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const ImageModal = React.forwardRef(
  ({ activeImage, images, setImageShow }: any, ref: any) => {
    const [showGalery, setShowGalery] = useState(false);

    const handleImageChange = (value: number) => {
      setImageShow((prev: number) => (prev + value) % images.length);
    };

    return (
      <Modal ref={ref}>
        <motion.div
          initial={{ y: '100%', opacity: 0.4 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
          exit={{ y: '100%', opacity: 0.4, transition: { duration: 0.2 } }}
          className="fixed bg-white inset-0 z-40"
        >
          <div className="flex ">
            {/* Left */}
            <div className="relative w-full h-screen bg-white">
              <div
                className="absolute top-[1vh] left-[1vh] p-[0.6vh] rounded-full bg-black/70 hover:bg-black/40 transition duration-300"
                onClick={() => ref.current.close()}
              >
                <IoCloseOutline className="text-[5vh] cursor-pointer text-white " />
              </div>
              <div
                className="absolute top-[1vh] right-[1vh] p-[0.6vh] rounded-full bg-black/70 hover:bg-black/40 transition duration-300"
                onClick={() => setShowGalery((prev: boolean) => !prev)}
              >
                hide
              </div>
              <img
                src={images[activeImage]}
                alt="product detail image"
                className="z-60 block w-full h-full object-contain border-transparent image-animation col-start-1 col-end-7"
              />

              <div
                className="absolute top-[50%] left-3 translate-y-[-50%] p-[0.6vh] rounded-full bg-black/70 hover:bg-black/40 transition duration-300"
                onClick={() => handleImageChange(-1)}
              >
                <AiOutlineLeft className="text-[5vh] cursor-pointer text-white" />
              </div>

              <div
                className="absolute top-[50%] right-3 translate-y-[-50%] p-[0.6vh] rounded-full bg-black/70 hover:bg-black/40 transition duration-300"
                onClick={() => handleImageChange(+1)}
              >
                <AiOutlineRight className="text-[5vh] cursor-pointer text-white" />
              </div>
            </div>

            {/* Right */}
            <AnimatePresence>
              {!showGalery && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: '500px',
                    transition: { duration: 0.1 },
                  }}
                  exit={{ width: 0, transition: { duration: 0.1 } }}
                  className="w-[500px] border-l h-screen overflow-y-scroll"
                >
                  <div className="p-5 grid grid-cols-4 gap-2 ">
                    {images.map((__: null, index: number) => (
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
      </Modal>
    );
  }
);

export default ImageModal;
