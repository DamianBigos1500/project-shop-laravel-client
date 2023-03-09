import React from 'react';
import Modal from '../Modal';
import useModal from '@/hooks/useModal';
import Backdrop from '../Backdrop';
import RedButton from '../UI/Button/RedButton';
import { FaPlus } from 'react-icons/fa';
import FavouritModalCard from './FavouritModalCard';
import useInput from '@/hooks/useInput';
import FormInput from '@/features/authentification/components/FormInput';
import SubmitButton from '../UI/Button/SubmitButton';
import { onSubmitType } from '@/types/onSubmitType';

export default function AddNewFavouritList({ addFavouritCollection }: any) {
  const [isShowing, openModal, closeModal] = useModal();
  const list_name = useInput('');

  const handleAddList = (e: onSubmitType) => {
    e.preventDefault();
    addFavouritCollection(list_name.value);
    closeModal();
    list_name.setValue('');
  };

  return (
    <div>
      <RedButton onClick={() => openModal()}>
        <FaPlus className="pr-2 text-xl block" />
        <span className="my-auto">New Favourit List</span>
      </RedButton>

      <Modal isOpen={isShowing}>
        <Backdrop closeModal={closeModal} />
        <FavouritModalCard>
          <form onSubmit={handleAddList} className="w-full flex">
            <div className="pr-4 w-[20rem] md:w-40">
              <FormInput
                id="list_name"
                name="list_name"
                {...list_name}
                type="text"
                placeholder="List name"
              />
            </div>
            <SubmitButton>Create List</SubmitButton>
          </form>
        </FavouritModalCard>
      </Modal>
    </div>
  );
}
