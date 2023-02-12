import React, { useState } from 'react';
import ImageModal from '../Modals/ImageModal';

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
  const [showModal, setShowModal] = useState(false);
  console.log(setShowModal);

  return (
    <div className="md:row-start-1 md:row-end-3 row-start-2 row-end-3">
      <div className="grid grid-cols-6 grid-row-7 gap-2 mt-2">
        <img
          onClick={() => setShowModal(true)}
          src={images[imageShow]}
          alt=""
          className="w-full rounded-xl border-transparent cursor-pointer image-animation col-start-1 col-end-7"
        />

        {images.map((__, index) => (
          <img
            key={index}
            src={images[index]}
            onClick={() => setShowModal(true)}
            onMouseOver={() => setImageShow(index)}
            alt=""
            className={`min-w-auto cursor-pointer border rounded-md transform-border duration-200 ${
              index === imageShow && 'border-gray-600'
            }`}
          />
        ))}
      </div>

      {showModal && (
        <ImageModal showModal={showModal} closeModal={setShowModal} />
      )}
    </div>
  );
}
