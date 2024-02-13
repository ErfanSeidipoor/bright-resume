import { useState } from "react";
// locals
import { FontFamily, FonSize, ThemeColor } from "../../index.type";

type Props = {
  themeColor: ThemeColor;
  fontFamily: FontFamily;
  fonSize: FonSize;
};

export const useData = (props: Props) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>(props.themeColor);
  const [fontFamily, setFontFamily] = useState<FontFamily>(props.fontFamily);
  const [fonSize, setFontWeight] = useState<FonSize>(props.fonSize);

  return {
    themeColor,
    changeThemeColor: setThemeColor,
    fontFamily,
    changeFontFamily: setFontFamily,
    fonSize,
    changeFontSize: setFontWeight,
  };
};
