import { useContext } from "react";
// context
import { ThemeContext } from "@bright-resume/components/Theme/index.context";

export const useTheme = () => useContext(ThemeContext);
