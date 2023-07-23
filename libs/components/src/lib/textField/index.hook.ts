import { useState, useRef, useEffect } from 'react';
// locals
import classes from './index.module.scss';
import { TextFieldVariantEnum } from '.';

export const useData = (variant: TextFieldVariantEnum) => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isInputActive) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 20);
    }
  }, [isInputActive]);

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  const handleGetVariantClassName = (variant: TextFieldVariantEnum) => {
    switch (variant) {
      case TextFieldVariantEnum.xxl:
        return classes.xxl;
      case TextFieldVariantEnum.xl:
        return classes.xl;
      case TextFieldVariantEnum.lg:
        return classes.lg;
      case TextFieldVariantEnum.md:
        return classes.md;
      case TextFieldVariantEnum.sm:
        return classes.sm;
      case TextFieldVariantEnum.xs:
        return classes.xs;
      case TextFieldVariantEnum.xxs:
        return classes.xxs;
      default:
        return classes.lg;
    }
  };

  return {
    isInputActive,
    setIsInputActive,
    inputRef,
    handleInputFocus,
    handleGetVariantClassName,
  };
};
