import { createContext, useContext } from "react";

import { ThemeColor } from "../../index.type";
import { ResumeFontFamilyEnum, ResumeFontSizeEnum } from "@enums";

export type Theme = {
  themeColor: ThemeColor;
  changeThemeColor: (themeColor: ThemeColor) => void;
  fontFamily: ResumeFontFamilyEnum;
  changeFontFamily: (fontFamily: ResumeFontFamilyEnum) => void;
  fonSize: ResumeFontSizeEnum;
  changeFontSize: (fonSize: ResumeFontSizeEnum) => void;
};

export const ThemeContext = createContext<Theme>({
  themeColor: ThemeColor.blue,
  changeThemeColor: () => undefined,
  fontFamily: ResumeFontFamilyEnum.montserrat,
  changeFontFamily: () => undefined,
  fonSize: ResumeFontSizeEnum.small,
  changeFontSize: () => undefined,
});

export const useTheme = () => useContext(ThemeContext);
