import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
// locals
import { useData } from "./index.hook";
import { FontFamily, FontWeight, ThemeColor } from "../types/index.type";

const initialProps = {
  themeColor: ThemeColor.blue,
  fontFamily: FontFamily.sansSerif,
  fontWeight: FontWeight.medium,
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

    expect(result.current.fontWeight).toBe(initialProps.fontWeight);

    act(() => {
      result.current.changeFontWeight(FontWeight.bold);
    });

    expect(result.current.fontWeight).toBe(FontWeight.bold);
  });
});
