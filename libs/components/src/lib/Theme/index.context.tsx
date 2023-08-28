import { createContext } from "react";
// locals
import { Theme } from "./index.type";

export const ThemeContext = createContext<Theme>({
  themeColor: "blue",
  changeThemeColor: () => undefined,
  fontFamily: "sansSerif",
  changeFontFamily: () => undefined,
  fontWeight: "medium",
  changeFontWeight: () => undefined,
});
