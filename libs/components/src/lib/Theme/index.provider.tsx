import { FontFamily, FontWeight, ThemeColor } from "@bright-resume/components";
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
    <div id={data.themeColor}>
      <div id={data.fontFamily}>
        <div id={data.fontWeight}>{children}</div>
      </div>
    </div>
  );
};

export default ThemeProvider;
