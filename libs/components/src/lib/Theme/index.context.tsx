import { createContext, useContext } from "react";
import { FontFamily, FontSize, Section, ThemeColor } from "../../index.type";

export type Theme = {
  themeColor: ThemeColor;
  changeThemeColor: (themeColor: ThemeColor) => void;
  fontFamily: FontFamily;
  changeFontFamily: (fontFamily: FontFamily) => void;
  fonSize: FontSize;
  changeFontSize: (fonSize: FontSize) => void;
  sections: Section[];
  changeSections: (section: Section) => void;
};

export const ThemeContext = createContext<Theme>({
  themeColor: ThemeColor.blue,
  changeThemeColor: () => undefined,
  fontFamily: FontFamily.montserrat,
  changeFontFamily: () => undefined,
  fonSize: FontSize.medium,
  changeFontSize: () => undefined,
  sections: [],
  changeSections: () => undefined,
});

export const useTheme = () => useContext(ThemeContext);
