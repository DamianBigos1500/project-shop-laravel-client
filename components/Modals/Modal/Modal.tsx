import React, { useState } from 'react';
import Background from './Background';

export default function Modal({ children, showModal, closeModal }: any) {

  if (!showModal) return null;
  return (
    <div>
      <Background closeModal={closeModal} />
      {children}
    </div>
  );
}
