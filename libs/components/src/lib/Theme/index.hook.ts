import { useState } from "react";
// locals
import { FonSize, ThemeColor } from "../../index.type";
import { ResumeFontFamilyEnum } from "@enums";

type Props = {
  themeColor: ThemeColor;
  fontFamily: ResumeFontFamilyEnum;
  fonSize: FonSize;
};

export const useData = (props: Props) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>(props.themeColor);
  const [fontFamily, setFontFamily] = useState<ResumeFontFamilyEnum>(
    props.fontFamily
  );
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
