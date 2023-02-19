import React, { useState } from 'react';
import ImageModal from '@/components/ImageModal';
import { imagesArray } from 'src/data/imagesArray';
import Modal from './Modal';
import useModal from '@/hooks/useModal';
import Backdrop from './Backdrop';

const images = imagesArray;

export default function ImagesDisplay() {
  const [imageShow, setImageShow] = useState<number>(0);
  const [isShowing, openModal, closeModal] = useModal();

  return (
    <div className=" md:row-start-1 md:row-end-3 row-start-2 row-end-3">
      <div className="grid grid-cols-6 grid-row-7 gap-2 mt-2">
        <img
          onClick={(_e) => openModal()}
          src={images[imageShow]}
          alt=""
          className="w-full rounded-xl border-transparent cursor-pointer image-animation col-start-1 col-end-7"
        />

        {images.map((image, index) => (
          <img
            key={index}
            src={images[index]}
            onClick={(_e) => openModal()}
            onMouseOver={() => setImageShow(index)}
            alt={image}
            className={`min-w-auto cursor-pointer border rounded-md transform-border duration-300 ${
              index === imageShow && 'border-gray-600'
            }`}
          />
        ))}
      </div>

      <Modal isOpen={isShowing}>
        <Backdrop closeModal={closeModal} isOpen={isShowing} />
        <ImageModal
          images={images}
          activeImage={imageShow}
          setImageShow={setImageShow}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}
