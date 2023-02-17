import React, { useEffect, useImperativeHandle, useState } from 'react';
import Background from './Background';
import { AnimatePresence } from 'framer-motion';
import ModalContent from './ModalContent';
import ReactDOM from 'react-dom';
import useBodyScrollLock from '../../../hooks/useBodyScrollLock';

export const Modal = React.forwardRef(({ children }: any, ref: any) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [_, toggle]: any = useBodyScrollLock();
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setOpen(true);
        toggle();
      },
      close: () => {
        setOpen(false);
        toggle();
      },
    };
  });
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <div>
          <Background closeModal={ref.current.close} />
          <ModalContent>{children}</ModalContent>
        </div>
      )}
    </AnimatePresence>,
    document.getElementById('modal-container')!
  );
});

export default Modal;
