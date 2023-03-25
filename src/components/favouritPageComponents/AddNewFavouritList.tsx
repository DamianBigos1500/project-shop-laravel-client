import React from 'react';
import Modal from '../Modal/Modal';
import useModal from '@/hooks/useModal';
import Backdrop from '../Modal/Backdrop';
import RedButton from '../UI/Button/RedButton';
import { FaPlus } from 'react-icons/fa';
import FavouritModalCard from './FavouritModalCard';
import FavouritListForm from './FavouritListForm';

export default function AddNewFavouritList({
  addFavouritCollection,
}: {
  addFavouritCollection(listName: string): void;
}) {
  const [isShowing, openModal, closeModal] = useModal();

  return (
    <div>
      <RedButton onClick={() => openModal()}>
        <FaPlus className="pr-2 text-xl block" />
        <span className="my-auto">New Favourit List</span>
      </RedButton>

      <Modal isOpen={isShowing}>
        <Backdrop closeModal={closeModal} />
        <FavouritModalCard>
          <FavouritListForm
            addFavouritCollection={addFavouritCollection}
            closeModal={closeModal}
          />
        </FavouritModalCard>
      </Modal>
    </div>
  );
}
