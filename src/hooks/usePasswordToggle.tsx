import { HTMLInputTypeAttribute, ReactNode, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function usePasswordToggle(): [string, ReactNode] {
  const [visible, setVisible] = useState(false);

  const changeVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const Icon = visible ? (
    <AiOutlineEyeInvisible onClick={changeVisibility} />
  ) : (
    <AiOutlineEye onClick={changeVisibility} />
  );

  const inputType: HTMLInputTypeAttribute = visible ? 'text' : 'password';

  return [inputType, Icon];
}
