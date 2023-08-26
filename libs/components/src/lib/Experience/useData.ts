import { useState } from "react";
// types
import { ExperienceChildProps } from "../types/index.type";

export const useData = () => {
  const [isHoverAddBtn, setIsHoverAddBtn] = useState(false);

  const defaultItems: ExperienceChildProps = {
    id: "child-hover",
    position: { placeholder: "Position" },
    company: { placeholder: "company name" },
    description: {
      placeholder:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  };

  const handleIsLastItemOnHover = (itemsLength: number, order: number) => {
    if (order > 0 && (itemsLength !== order || isHoverAddBtn)) return true;
    return false;
  };
  return {
    defaultItems,
    isHoverAddBtn,
    setIsHoverAddBtn,
    handleIsLastItemOnHover,
  };
};
