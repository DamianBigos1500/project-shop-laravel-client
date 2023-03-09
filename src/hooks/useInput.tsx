import { SetStateAction, useState } from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue: setValue,
    onChange: handleChange,
  };
}
