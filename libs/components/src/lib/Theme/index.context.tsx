import { createContext, useContext } from "react";

import { FonSize, ThemeColor } from "../../index.type";
import { ResumeFontFamilyEnum } from "@enums";

export type Theme = {
  themeColor: ThemeColor;
  changeThemeColor: (themeColor: ThemeColor) => void;
  fontFamily: ResumeFontFamilyEnum;
  changeFontFamily: (fontFamily: ResumeFontFamilyEnum) => void;
  fonSize: FonSize;
  changeFontSize: (fonSize: FonSize) => void;
};

export const ThemeContext = createContext<Theme>({
  themeColor: ThemeColor.blue,
  changeThemeColor: () => undefined,
  fontFamily: ResumeFontFamilyEnum.montserrat,
  changeFontFamily: () => undefined,
  fonSize: FonSize.medium,
  changeFontSize: () => undefined,
});

export const useTheme = () => useContext(ThemeContext);
