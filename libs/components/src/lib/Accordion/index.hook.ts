import { useState } from "react";

export const useData = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    handleToggle,
  };
};
