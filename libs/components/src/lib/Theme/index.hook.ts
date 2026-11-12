import { useState } from "react";
// locals
import { ThemeColor } from "../../index.type";
import { ResumeFontFamilyEnum, ResumeFontSizeEnum } from "@enums";

type Props = {
  themeColor: ThemeColor;
  fontFamily: ResumeFontFamilyEnum;
  fonSize: ResumeFontSizeEnum;
};

export const useData = (props: Props) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>(props.themeColor);
  const [fontFamily, setFontFamily] = useState<ResumeFontFamilyEnum>(
    props.fontFamily
  );
  const [fonSize, setFontWeight] = useState<ResumeFontSizeEnum>(props.fonSize);

  return {
    themeColor,
    changeThemeColor: setThemeColor,
    fontFamily,
    changeFontFamily: setFontFamily,
    fonSize,
    changeFontSize: setFontWeight,
  };
};
