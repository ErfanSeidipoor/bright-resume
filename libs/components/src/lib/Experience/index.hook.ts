import { useState } from "react";

export const useData = () => {
  const [isHoverAddBtn, setIsHoverAddBtn] = useState(false);
  const [showOptions, setShowOptions] = useState({
    isShowLocation: false,
    isShowDate: false,
    isShowPoints: false,
  });
  const [showMenuId, setShowMenuId] = useState<string>("");

  const handleIsLastItemOnHover = (itemsLength: number, order: number) => {
    if (order > 0 && (itemsLength !== order || isHoverAddBtn)) return true;
    return false;
  };

  const handleShowMenuId = (id: string) => {
    return setShowMenuId(id);
  };

  const toggleShowLocation = () =>
    setShowOptions((prevState) => ({
      ...prevState,
      isShowLocation: !showOptions.isShowLocation,
    }));
  const toggleShowDate = () =>
    setShowOptions((prevState) => ({
      ...prevState,
      isShowDate: !showOptions.isShowDate,
    }));
  const toggleShowPoints = () =>
    setShowOptions((prevState) => ({
      ...prevState,
      isShowPoints: !showOptions.isShowPoints,
    }));

  return {
    isHoverAddBtn,
    setIsHoverAddBtn,
    handleIsLastItemOnHover,
    showMenuId,
    handleShowMenuId,
    toggleShowLocation,
    toggleShowDate,
    toggleShowPoints,
    showOptions,
  };
};
