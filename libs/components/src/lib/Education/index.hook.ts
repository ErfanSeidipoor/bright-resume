import { useState } from "react";

export const useData = () => {
  const [isHoverAddBtn, setIsHoverAddBtn] = useState(false);
  const [showMenuId, setShowMenuId] = useState<string>("");

  const handleIsLastItemOnHover = (itemsLength: number, order: number) => {
    if (order > 0 && (itemsLength !== order || isHoverAddBtn)) return true;
    return false;
  };

  const handleShowMenuId = (id: string) => {
    return setShowMenuId(id);
  };

  return {
    isHoverAddBtn,
    setIsHoverAddBtn,
    handleIsLastItemOnHover,
    showMenuId,
    handleShowMenuId,
  };
};
