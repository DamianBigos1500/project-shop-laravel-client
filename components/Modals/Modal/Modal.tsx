import React, { useImperativeHandle, useState } from 'react';
import Background from './Background';
import { AnimatePresence } from 'framer-motion';
import ModalContent from './ModalContent';

export const Modal = React.forwardRef(({ children }: any, ref: any) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <Background closeModal={ref.current.close} />
          <ModalContent>{children}</ModalContent>
        </>
      )}
    </AnimatePresence>
  );
});

export default Modal;
