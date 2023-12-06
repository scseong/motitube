import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };

  return { value, setValue, onChange };
}
