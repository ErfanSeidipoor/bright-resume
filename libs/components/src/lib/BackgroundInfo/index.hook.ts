import { useState } from "react";

export const useData = () => {
  const [isHoverAddBtn, setIsHoverAddBtn] = useState(false);

  const handleIsLastItemOnHover = (itemsLength: number, order: number) => {
    if (order > 0 && (itemsLength !== order || isHoverAddBtn)) return true;
    return false;
  };
  return {
    isHoverAddBtn,
    setIsHoverAddBtn,
    handleIsLastItemOnHover,
  };
};
