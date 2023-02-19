import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

export default function Modal({ children, isOpen }: any) {
  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed w-full h-full inset-0">{children}</div>
      ) : null}
    </AnimatePresence>,
    document.getElementById('modal-container')!
  );
}
