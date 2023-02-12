import React, { useEffect, useImperativeHandle, useState } from 'react';
import Background from './Background';
import { AnimatePresence } from 'framer-motion';
import ModalContent from './ModalContent';
import ReactDOM from 'react-dom';

export const Modal = React.forwardRef(({ children }: any, ref: any) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <>
          <Background closeModal={ref.current.close} />
          <ModalContent>{children}</ModalContent>
        </>
      )}
    </AnimatePresence>,
    document.getElementById('modal-container')!
  );
});

export default Modal;
