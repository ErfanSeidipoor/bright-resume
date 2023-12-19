import { createContext, useContext } from "react";

import { FontFamily, FonSize, ThemeColor } from "../../index.type";

export type Theme = {
  themeColor: ThemeColor;
  changeThemeColor: (themeColor: ThemeColor) => void;
  fontFamily: FontFamily;
  changeFontFamily: (fontFamily: FontFamily) => void;
  fonSize: FonSize;
  changeFontSize: (fonSize: FonSize) => void;
};

export const ThemeContext = createContext<Theme>({
  themeColor: ThemeColor.blue,
  changeThemeColor: () => undefined,
  fontFamily: FontFamily.montserrat,
  changeFontFamily: () => undefined,
  fonSize: FonSize.medium,
  changeFontSize: () => undefined,
});

export const useTheme = () => useContext(ThemeContext);
