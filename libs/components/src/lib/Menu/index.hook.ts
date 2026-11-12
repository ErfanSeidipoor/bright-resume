import { useState } from "react";

export const useData = () => {
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const [isOpenSectionsPicker, setIsOpenSectionsPicker] = useState(false);
  const [isOpenFontFamilyPicker, setIsOpenFontFamilyPicker] = useState(false);
  const [isOpenFontSizePicker, setIsOpenFontSizePicker] = useState(false);

  const handleToggleColorPicker = () => {
    setIsOpenColorPicker((prev) => !prev);
  };

  const handleToggleSectionsPicker = () => {
    setIsOpenSectionsPicker((prev) => !prev);
  };

  const handleToggleFontFamilyPicker = () => {
    setIsOpenFontFamilyPicker((prev) => !prev);
  };

  const handleToggleFontSizePicker = () => {
    setIsOpenFontSizePicker((prev) => !prev);
  };

  return {
    isOpenColorPicker,
    handleToggleColorPicker,
    isOpenSectionsPicker,
    handleToggleSectionsPicker,
    isOpenFontFamilyPicker,
    handleToggleFontFamilyPicker,
    isOpenFontSizePicker,
    handleToggleFontSizePicker,
  };
};
