import { createContext, useContext } from "react";

import { FontFamily, FontWeight, ThemeColor } from "../types/index.type";

export type Theme = {
  themeColor: ThemeColor;
  changeThemeColor: (themeColor: ThemeColor) => void;
  fontFamily: FontFamily;
  changeFontFamily: (fontFamily: FontFamily) => void;
  fontWeight: FontWeight;
  changeFontWeight: (fontWeight: FontWeight) => void;
};

export const ThemeContext = createContext<Theme>({
  themeColor: ThemeColor.blue,
  changeThemeColor: () => undefined,
  fontFamily: FontFamily.sansSerif,
  changeFontFamily: () => undefined,
  fontWeight: FontWeight.medium,
  changeFontWeight: () => undefined,
});

export const useTheme = () => useContext(ThemeContext);
