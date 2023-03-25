import FormInput from '@/features/authentification/components/FormInput';
import React from 'react';
import SubmitButton from '../UI/Button/SubmitButton';
import useInput from '@/hooks/useInput';
import { onSubmitType } from '@/types/onSubmitType';

type propsType = {
  addFavouritCollection(listName: string): void;
  closeModal(): void;
};

export default function FavouritListForm({
  addFavouritCollection,
  closeModal = () => {},
}: propsType) {
  const list_name = useInput('');

  const handleAddList = (e: onSubmitType) => {
    e.preventDefault();
    addFavouritCollection(list_name.value);
    closeModal();
    list_name.setValue('');
  };

  return (
    <form onSubmit={handleAddList} className="w-full flex">
      <div className="pr-4 md:w-[20rem] w-40">
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
  );
}
