import { useState } from 'react';
import useBodyScrollLock from './useBodyScrollLock';

export default function useModal() {
  const [isShowing, setIsShowing] = useState(false);
  const [changeLockScroll] = useBodyScrollLock();

  const openModal = () => {
    changeLockScroll();
    setIsShowing((prev: boolean) => !prev);
  };

  const closeModal = () => {
    changeLockScroll();
    setIsShowing((prev: boolean) => !prev);
  };

  return [isShowing, openModal, closeModal] as const;
}
