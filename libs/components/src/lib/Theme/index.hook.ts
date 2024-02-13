import { useState } from "react";
// locals
import { FontFamily, FontSize, Section, ThemeColor } from "../../index.type";

type Props = {
  themeColor: ThemeColor;
  fontFamily: FontFamily;
  fonSize: FontSize;
  sections: Section[];
};

export const useData = (props: Props) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>(props.themeColor);
  const [fontFamily, setFontFamily] = useState<FontFamily>(props.fontFamily);
  const [fonSize, setFontWeight] = useState<FontSize>(props.fonSize);
  const [sections, setSections] = useState<Section[]>(props.sections);

  const handleChangeSections = (section: Section) => {
    setSections((prev) => {
      const isAdded = prev.some((currentSection) => currentSection === section);
      if (isAdded) {
        return prev.filter((currentSection) => currentSection !== section);
      }
      return [...prev, section];
    });
  };

  return {
    themeColor,
    changeThemeColor: setThemeColor,
    fontFamily,
    changeFontFamily: setFontFamily,
    fonSize,
    changeFontSize: setFontWeight,
    sections,
    changeSections: handleChangeSections,
  };
};
