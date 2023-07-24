import { useState, useRef, useEffect } from 'react';
// locals
import classes from './index.module.scss';
import { InputFieldVariantEnum } from '.';

export const useData = (variant: InputFieldVariantEnum) => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutSide = (e: MouseEvent) => {
    if (!rootRef.current?.contains(e.target as Node)) setIsInputActive(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true);
  }, []);

  return {
    isInputActive,
    setIsInputActive,
    inputRef,
    handleGetVariantClassName,
    rootRef,
  };
};
