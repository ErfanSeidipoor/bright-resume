<<<<<<< HEAD
import { FontFamily, FonSize, ThemeColor } from "../types/index.type";
import { ThemeContext } from "./index.context";
=======
import { FontFamily, FontWeight, ThemeColor } from "@bright-resume/components";
>>>>>>> a61ed48d3523a317dc4df0b6df59cffc71dc7f71
// locals
import { useData } from "./index.hook";

export type ThemeProps = {
  children: React.ReactNode;
  themeColor?: ThemeColor;
  fontFamily?: FontFamily;
  fonSize?: FonSize;
};

export const ThemeProvider: React.FC<ThemeProps> = ({
  children,
  themeColor = ThemeColor.blue,
  fontFamily = FontFamily.montserrat,
  fonSize = FonSize.medium,
}) => {
  const data = useData({ themeColor, fontFamily, fonSize });

  return (
<<<<<<< HEAD
    <ThemeContext.Provider value={data}>
      <div id={data.themeColor}>
        <div id={data.fontFamily}>
          <div id={data.fonSize}>{children}</div>
        </div>
=======
    <div id={data.themeColor}>
      <div id={data.fontFamily}>
        <div id={data.fontWeight}>{children}</div>
>>>>>>> a61ed48d3523a317dc4df0b6df59cffc71dc7f71
      </div>
    </div>
  );
};

export default ThemeProvider;
