import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
// locals
import { useData } from "./index.hook";
import { FonSize, ThemeColor } from "../../index.type";
import { ResumeFontFamilyEnum } from "@enums";

const initialProps = {
  themeColor: ThemeColor.blue,
  fontFamily: ResumeFontFamilyEnum.montserrat,
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
      result.current.changeFontFamily(ResumeFontFamilyEnum.montserrat);
    });

    expect(result.current.fontFamily).toBe(ResumeFontFamilyEnum.montserrat);
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
