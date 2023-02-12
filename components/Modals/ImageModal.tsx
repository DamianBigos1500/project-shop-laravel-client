import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';
import Modal from './Modal/Modal';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const ImageModal = React.forwardRef(
  ({ activeImage, images, setImageShow }: any, ref: any) => {
    const handleImageChange = (value: number) => {};

    return (
      <Modal ref={ref}>
        <motion.div
          initial={{ y: '100%', opacity: 0.4 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
          exit={{ y: '100%', opacity: 0.4, transition: { duration: 0.3 } }}
          className="fixed bg-white inset-0 z-40"
        >
          <div className="flex">
            {/* Left */}
            <div
              className="relative w-full h-screen bg-white"
            >
              <div
                className="absolute top-3 left-3 p-1 rounded-full bg-black/70 hover:bg-black/40 transition duration-300"
                onClick={() => ref.current.close()}
              >
                <IoCloseOutline className="text-4xl cursor-pointer text-white " />
              </div>
              <img
                src={images[activeImage]}
                alt="product detail image"
                className="z-60 block w-full h-full object-contain border-transparent image-animation col-start-1 col-end-7"
              />

              <div
                className="absolute top-[50%] left-3 translate-y-[-50%] p-1 rounded-full bg-black/70 hover:bg-black/40 transition duration-300"
                onClick={() => handleImageChange(-1)}
              >
                <AiOutlineLeft className="text-4xl cursor-pointer text-white" />
              </div>

              <div
                className="absolute top-[50%] right-3 translate-y-[-50%] p-1 rounded-full bg-black/70 hover:bg-black/40 transition duration-300"
                onClick={() => handleImageChange(+1)}
              >
                <AiOutlineRight className="text-4xl cursor-pointer text-white" />
              </div>
            </div>

            {/* Right */}
            <div className="w-[36rem] border-l">
              <div className="p-5 grid grid-cols-4 gap-2">
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
            </div>
          </div>
        </motion.div>
      </Modal>
    );
  }
);

export default ImageModal;
