import { useState, useRef, useEffect } from "react";

export const useData = () => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isInputActive) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 20);
    }
  }, [isInputActive]);

  return {
    isInputActive,
    setIsInputActive,
    inputRef,
  };
};
