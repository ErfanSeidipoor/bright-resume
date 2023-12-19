import { useState } from "react";
// types
import { FontSize, Section } from "../../index.type";

export const useData = ({
  onChangeFontSize,
}: {
  onChangeFontSize: (fontSize: FontSize) => void;
}) => {
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

  const handleChangeFontSize = (fontSize: FontSize, type: "plus" | "minus") => {
    const plusFontSize = {
      [FontSize.small]: FontSize.medium,
      [FontSize.medium]: FontSize.large,
    };
    const minusFontSize = {
      [FontSize.large]: FontSize.medium,
      [FontSize.medium]: FontSize.small,
    };
    if (type === "plus" && fontSize !== FontSize.large) {
      onChangeFontSize(plusFontSize[fontSize]);
    } else if (type === "minus" && fontSize !== FontSize.small) {
      onChangeFontSize(minusFontSize[fontSize]);
    }
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
    handleChangeFontSize,
  };
};
