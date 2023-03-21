import React, { useState } from 'react';
import ImageModal from '@/components/ImageModal';
import Modal from '../Modal/Modal';
import useModal from '@/hooks/useModal';
import Backdrop from '../Modal/Backdrop';
import { imageType } from '@/types/imageType';
import Image from 'next/image';

type propsType = {
  images: imageType[];
};

export default function ImagesDisplay({ images }: propsType) {
  const [imageShow, setImageShow] = useState<number>(0);
  const [isShowing, openModal, closeModal] = useModal();

  return (
    <div className=" md:row-start-1 md:row-end-3 row-start-2 row-end-3">
      <div className="grid grid-cols-6 grid-row-7 gap-2 mt-2">
        <Image
          onClick={(_e) => openModal()}
          src={
            process.env.NEXT_PUBLIC_BACKEND_IMG_URL + images[imageShow].filename
          }
          width={192}
          height={192}
          alt={images[imageShow].filename}
          className="w-full aspect-[10_/_12] object-cover rounded-xl border-transparent cursor-pointer col-start-1 col-end-7"
        />

        {images.map((image: imageType, index: number) => {
          if (index >= 6) return;
          return (
            <Image
              key={index}
              src={
                process.env.NEXT_PUBLIC_BACKEND_IMG_URL + images[index].filename
              }
              onClick={(_e) => openModal()}
              onMouseOver={() => setImageShow(index)}
              width={80}
              height={100}
              alt={images[index].filename}
              className={`relative w-full aspect-[10_/_12] object-cover cursor-pointer border rounded-md transform-border duration-300 ${
                index === imageShow && 'border-gray-600'
              } ${
                index === 5 &&
                'before:absolute before:content-["hello"] before:h-screen before:w-screen before:block'
              } `}
            />
          );
        })}
      </div>

      <Modal isOpen={isShowing}>
        <Backdrop closeModal={closeModal} />
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
