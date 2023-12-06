import { FontFamily, FonSize, ThemeColor } from "../../index.type";
import { ThemeContext } from "./index.context";
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
    <ThemeContext.Provider value={data}>
      <div id={data.themeColor}>
        <div id={data.fontFamily}>
          <div id={data.fonSize}>{children}</div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
