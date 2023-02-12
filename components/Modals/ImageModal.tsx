import React, { useState } from 'react';
import Modal from './Modal/Modal';

export default function ImageModal({ showModal, closeModal }: any) {
  return (
    <div>
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
}
