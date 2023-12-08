import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
// locals
import { useData } from "./index.hook";
<<<<<<< HEAD
import { FontFamily, FonSize, ThemeColor } from "../types/index.type";
=======
import { FontFamily, FontWeight, ThemeColor } from "@bright-resume/components";
>>>>>>> a61ed48d3523a317dc4df0b6df59cffc71dc7f71

const initialProps = {
  themeColor: ThemeColor.blue,
  fontFamily: FontFamily.montserrat,
  fonSize: FonSize.medium,
};

describe("theme hook", () => {
  it("should change theme color state", () => {
    const { result } = renderHook(() => useData(initialProps));

    expect(result.current.themeColor).toBe(initialProps.themeColor);

    act(() => {
      result.current.changeThemeColor(ThemeColor.gold);
    });

    expect(result.current.themeColor).toBe(ThemeColor.gold);
  });

  it("should change font family state", () => {
    const { result } = renderHook(() => useData(initialProps));

    expect(result.current.fontFamily).toBe(initialProps.fontFamily);

    act(() => {
      result.current.changeFontFamily(FontFamily.montserrat);
    });

    expect(result.current.fontFamily).toBe(FontFamily.montserrat);
  });

  it("should change font family state", () => {
    const { result } = renderHook(() => useData(initialProps));

    expect(result.current.fonSize).toBe(initialProps.fonSize);

    act(() => {
      result.current.changeFontSize(FonSize.large);
    });

    expect(result.current.fonSize).toBe(FonSize.large);
  });
});
