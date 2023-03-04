import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
  isOpen: boolean;
};

export default function Modal({ children, isOpen }: propsType) {
  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed w-full h-full inset-0 z-50">{children}</div>
      ) : null}
    </AnimatePresence>,
    document.getElementById('modal-container')!
  );
}
