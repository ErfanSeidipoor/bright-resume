"use client";
import { useState } from "react";

export const useData = () => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

  const handleActiveInput = () => {
    setIsInputActive(true);
  };

  const handleDeActiveInput = () => {
    setIsInputActive(false);
  };

  return {
    isInputActive,
    handleActiveInput,
    handleDeActiveInput,
  };
};
