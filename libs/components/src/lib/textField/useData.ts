import { useState, useRef, useEffect } from 'react';

export const useData = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 20);
    }
  }, [showInput]);
  return {
    showInput,
    setShowInput,
    inputRef,
  };
};
