import React, { useState } from 'react';

export default function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const Icon = <span>{visible ? 'hide' : 'show'}</span>;

  const inputType = visible ? 'text' : 'password';

  return [inputType, Icon];
}
