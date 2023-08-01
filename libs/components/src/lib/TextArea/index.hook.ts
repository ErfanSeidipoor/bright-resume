import { useState } from "react";

export const useData = () => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

  return {
    isInputActive,
    setIsInputActive,
  };
};
