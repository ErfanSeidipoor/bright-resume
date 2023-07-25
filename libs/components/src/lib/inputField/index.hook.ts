import { useState, useRef, useEffect } from "react";
// locals
import classes from "./index.module.scss";
import { InputFieldVariantEnum } from ".";

export const useData = (variant: InputFieldVariantEnum) => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isInputActive) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 20);
    }
  }, [isInputActive]);

  const handleGetVariantClassName = (variant: InputFieldVariantEnum) => {
    switch (variant) {
      case InputFieldVariantEnum.xxl:
        return classes.xxl;
      case InputFieldVariantEnum.xl:
        return classes.xl;
      case InputFieldVariantEnum.lg:
        return classes.lg;
      case InputFieldVariantEnum.md:
        return classes.md;
      case InputFieldVariantEnum.sm:
        return classes.sm;
      case InputFieldVariantEnum.xs:
        return classes.xs;
      case InputFieldVariantEnum.xxs:
        return classes.xxs;
      default:
        return classes.lg;
    }
  };

  return {
    isInputActive,
    setIsInputActive,
    inputRef,
    handleGetVariantClassName,
  };
};
