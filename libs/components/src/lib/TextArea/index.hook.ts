import { useState } from "react";

export const useData = () => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

  const handleDeActiveInput = () => {
    setIsInputActive(false);
  };

  const handleActiveInput = () => {
    setIsInputActive(true);
  };

  return {
    isInputActive,
    handleActiveInput,
    handleDeActiveInput,
  };
};
