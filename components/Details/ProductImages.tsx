import React, { useRef, useState } from 'react';
import ImageModal from '../Modals/ImageModal';
import { AnimatePresence } from 'framer-motion';

const imagesArray = [
  '/product-1-1.jpg',
  '/product-1-2.jpg',
  '/product-13-1.jpg',
  '/product-13-2.jpg',
  '/product-14-1.jpg',
  '/product-14-2.jpg',
];

export default function ImagesDisplay() {
  const [images, setImages] = useState<string[]>(imagesArray);
  const [imageShow, setImageShow] = useState<number>(0);

  const modalRef = useRef<any>();

  return (
    <div className="md:row-start-1 md:row-end-3 row-start-2 row-end-3">
      <div className="grid grid-cols-6 grid-row-7 gap-2 mt-2">
        <AnimatePresence>
          <img
            onClick={() => modalRef?.current.open()}
            src={images[imageShow]}
            alt=""
            className="w-full rounded-xl border-transparent cursor-pointer image-animation col-start-1 col-end-7"
          />
        </AnimatePresence>

        {images.map((__, index) => (
          <img
            key={index}
            src={images[index]}
            onClick={() => modalRef?.current.open()}
            onMouseOver={() => setImageShow(index)}
            alt=""
            className={`min-w-auto cursor-pointer border rounded-md transform-border duration-300 ${
              index === imageShow && 'border-gray-600'
            }`}
          />
        ))}
      </div>

      <ImageModal
        activeImage={imageShow}
        images={images}
        setImageShow={setImageShow}
        ref={modalRef}
      />
    </div>
  );
}
