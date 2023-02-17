import React, { useEffect, useState } from 'react';

export default function useBodyScrollLock() {
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === 'hidden');

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? 'hidden' : 'auto';
  }, [isLocked, bodyStyle]);

  const toggle = () => {
    setIsLocked((prev) => !prev);
  };

  return [isLocked, toggle];
}
