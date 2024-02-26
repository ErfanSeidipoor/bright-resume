import { useState } from "react";

import { createResumeControlType } from "../../index.type";
import { useFieldArray } from "react-hook-form";

export const useData = (control: createResumeControlType) => {
  const [isHoverAddBtn, setIsHoverAddBtn] = useState(false);
  const [showMenuId, setShowMenuId] = useState<string>("");

  const handleIsLastItemOnHover = (itemsLength: number, order: number) => {
    if (order > 0 && (itemsLength !== order || isHoverAddBtn)) return true;
    return false;
  };

  const handleShowMenuId = (id: string) => {
    return setShowMenuId(id);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "courseWorks",
  });

  const handleIncrease = () => {
    append({
      name: "",
      points: [],
    });
  };

  const handleDecrease = (index: number) => {
    remove(index);
  };

  return {
    isHoverAddBtn,
    setIsHoverAddBtn,
    handleIsLastItemOnHover,
    showMenuId,
    handleShowMenuId,
    fields,
    handleIncrease,
    handleDecrease,
  };
};
