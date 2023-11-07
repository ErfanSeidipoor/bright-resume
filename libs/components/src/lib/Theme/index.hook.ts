import { useState } from "react";
// locals
import { FontFamily, FontWeight, ThemeColor } from "@bright-resume/components";

type Props = {
  themeColor: ThemeColor;
  fontFamily: FontFamily;
  fontWeight: FontWeight;
};

export const useData = (props: Props) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>(props.themeColor);
  const [fontFamily, setFontFamily] = useState<FontFamily>(props.fontFamily);
  const [fontWeight, setFontWeight] = useState<FontWeight>(props.fontWeight);

  return {
    themeColor,
    changeThemeColor: setThemeColor,
    fontFamily,
    changeFontFamily: setFontFamily,
    fontWeight,
    changeFontWeight: setFontWeight,
  };
};
