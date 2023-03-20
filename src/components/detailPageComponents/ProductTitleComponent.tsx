import useModal from '@/hooks/useModal';
import React, { Suspense } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Modal from '../Modal/Modal';
import Backdrop from '../Modal/Backdrop';
import useAuthContext from '@/context/useAuthContext';
import Router from 'next/router';
const FavouritModal = React.lazy(
  () => import('../favouritPageComponents/FavouritModal')
);

type propsType = {
  productId: number;
  name: string;
};

export default function ProductTitleComponent({ name, productId }: propsType) {
  const [isShowing, openModal, closeModal] = useModal();
  const { user } = useAuthContext();

  const handleOpenModal = () => {
    if (user) openModal();
    else Router.push('/login');
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold ">{name}</h1>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleOpenModal}
          className="flex items-center py-2 px-6 text-md font-semibold rounded-3xl bg-white border-2 text-red-500 border-red-500 hover:bg-red-600 hover:text-white hover:border-transparent transform duration-200"
        >
          <AiOutlineHeart className="text-2xl" />
        </button>
      </div>

      {user && (
        <Modal isOpen={isShowing}>
          <Backdrop closeModal={closeModal} />
          <Suspense fallback={<div>Loading...</div>}>
            <FavouritModal productId={productId} />
          </Suspense>
        </Modal>
      )}
    </div>
  );
}
