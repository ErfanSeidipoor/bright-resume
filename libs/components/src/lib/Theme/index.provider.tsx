import { FontFamily, FontWeight, ThemeColor } from "../types/index.type";
import { ThemeContext } from "./index.context";
// locals
import { useData } from "./index.hook";

export type ThemeProps = {
  children: React.ReactNode;
  themeColor?: ThemeColor;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
};

export const ThemeProvider: React.FC<ThemeProps> = ({
  children,
  themeColor = ThemeColor.blue,
  fontFamily = FontFamily.sansSerif,
  fontWeight = FontWeight.medium,
}) => {
  const data = useData({ themeColor, fontFamily, fontWeight });

  return (
    <ThemeContext.Provider value={data}>
      <div id={data.themeColor}>
        <div id={data.fontWeight}>
          <div id={data.fontWeight}>{children}</div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
