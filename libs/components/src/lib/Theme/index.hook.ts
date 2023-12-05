import { useState } from "react";
// locals
<<<<<<< HEAD
import { FontFamily, FonSize, ThemeColor } from "../types/index.type";
=======
import { FontFamily, FontWeight, ThemeColor } from "@bright-resume/components";
>>>>>>> a61ed48d3523a317dc4df0b6df59cffc71dc7f71

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
