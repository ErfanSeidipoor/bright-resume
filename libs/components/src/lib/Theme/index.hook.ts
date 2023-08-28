import { useCallback, useLayoutEffect, useState } from "react";
// locals
import { FontFamily, FontWeight, ThemeColor } from "./index.type";

export const useData = () => {
  const [themeColor, setThemeColor] = useState<ThemeColor>("blue");
  const [fontFamily, setFontFamily] = useState<FontFamily>("sansSerif");
  const [fontWeight, setFontWeight] = useState<FontWeight>("medium");

  /* -------------------------- Update local storage -------------------------- */

  const updateThemeColorLocalStorage = useCallback((value: ThemeColor) => {
    localStorage.setItem("theme-color", value);
  }, []);

  const updateFontFamilyLocalStorage = useCallback((value: FontFamily) => {
    localStorage.setItem("font-family", value);
  }, []);

  const updateFontWeightLocalStorage = useCallback((value: FontWeight) => {
    localStorage.setItem("font-weight", value);
  }, []);

  /* ----------------------------- Update document ---------------------------- */

  const updateThemeColorDocument = useCallback((value: ThemeColor) => {
    let id = "";
    const element = document.querySelector(
      "[data-theme=theme-color]"
    ) as HTMLElement;
    if (!element) return;
    switch (value) {
      case "blue":
        id = "theme-blue";
        break;
      case "gold":
        id = "theme-gold";
        break;
      case "green":
        id = "theme-green";
        break;
      case "grey":
        id = "theme-grey";
        break;
      case "purple":
        id = "theme-purple";
    }
    element.id = id;
  }, []);

  const updateFontFamilyDocument = useCallback((value: FontFamily) => {
    let id = "";
    const element = document.querySelector(
      "[data-font-family=font-family]"
    ) as HTMLElement;
    if (!element) return;
    switch (value) {
      case "sansSerif":
        id = "font-family-sans-serif";
        break;
      case "montserrat":
        id = "font-family-montserrat";
        break;
    }
    element.id = id;
  }, []);

  const updateFontWeightDocument = useCallback((value: FontWeight) => {
    let id = "";
    const element = document.querySelector(
      "[data-font-weight=font-weight]"
    ) as HTMLElement;
    if (!element) return;
    switch (value) {
      case "semiBold":
        id = "font-weight-semi-bold";
        break;
      case "bold":
        id = "font-weight-bold";
        break;
      case "medium":
        id = "font-weight-medium";
        break;
      case "regular":
        id = "font-weight-regular";
        break;
      case "light":
        id = "font-weight-light";
        break;
    }
    element.id = id;
  }, []);

  /* ------------------------------ Update state ------------------------------ */

  const changeThemeColor = useCallback(
    (themeColor: ThemeColor) => {
      setThemeColor(themeColor);
      updateThemeColorDocument(themeColor);
      updateThemeColorLocalStorage(themeColor);
    },
    [updateThemeColorDocument, updateThemeColorLocalStorage]
  );

  const changeFontFamily = useCallback(
    (fontFamily: FontFamily) => {
      setFontFamily(fontFamily);
      updateFontFamilyDocument(fontFamily);
      updateFontFamilyLocalStorage(fontFamily);
    },
    [updateFontFamilyDocument, updateFontFamilyLocalStorage]
  );

  const changeFontWeight = useCallback(
    (fontWeight: FontWeight) => {
      setFontWeight(fontWeight);
      updateFontWeightDocument(fontWeight);
      updateFontWeightLocalStorage(fontWeight);
    },
    [updateFontWeightDocument, updateFontWeightLocalStorage]
  );

  /* ------------------------------ Initial state ----------------------------- */

  const getThemeColorFromLocalStorage = useCallback(() => {
    const themeColor = localStorage.getItem("theme-color") as ThemeColor;
    if (!themeColor) return;
    setThemeColor(themeColor);
  }, []);

  const getFontFamilyFromLocalStorage = useCallback(() => {
    const fontFamily = localStorage.getItem("font-family") as FontFamily;
    if (!fontFamily) return;
    setFontFamily(fontFamily);
  }, []);

  const getFontWeightFromLocalStorage = useCallback(() => {
    const fontWeight = localStorage.getItem("font-weight") as FontWeight;
    if (!fontWeight) return;
    setFontWeight(fontWeight);
  }, []);

  useLayoutEffect(() => {
    getThemeColorFromLocalStorage();
    getFontFamilyFromLocalStorage();
    getFontWeightFromLocalStorage();
  }, [
    getFontFamilyFromLocalStorage,
    getFontWeightFromLocalStorage,
    getThemeColorFromLocalStorage,
  ]);

  return {
    themeColor,
    changeThemeColor,
    fontFamily,
    changeFontFamily,
    fontWeight,
    changeFontWeight,
  };
};
