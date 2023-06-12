import { useState } from 'react';

export const useData = () => {
  const [value, setValue] = useState<string>('Position');

  return {
    value,
    setValue,
  };
};
