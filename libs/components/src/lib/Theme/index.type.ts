export type ThemeColor = "blue" | "green" | "purple" | "gold" | "grey";

export type FontWeight = "semiBold" | "bold" | "regular" | "medium" | "light";

export type FontFamily = "sansSerif" | "montserrat";

export type Theme = {
  themeColor: ThemeColor;
  changeThemeColor: (themeColor: ThemeColor) => void;
  fontFamily: FontFamily;
  changeFontFamily: (fontFamily: FontFamily) => void;
  fontWeight: FontWeight;
  changeFontWeight: (fontWeight: FontWeight) => void;
};
