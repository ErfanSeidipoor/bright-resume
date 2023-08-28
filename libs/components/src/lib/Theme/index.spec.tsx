import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
// locals
import { useData } from "./index.hook";

describe("theme hook", () => {
  it("should change theme color state", () => {
    const { result } = renderHook(() => useData());

    expect(result.current.themeColor).toBe("blue");

    act(() => {
      result.current.changeThemeColor("gold");
    });

    expect(result.current.themeColor).toBe("gold");
  });

  it("should change font family state", () => {
    const { result } = renderHook(() => useData());

    expect(result.current.fontFamily).toBe("sansSerif");

    act(() => {
      result.current.changeFontFamily("montserrat");
    });

    expect(result.current.fontFamily).toBe("montserrat");
  });

  it("should change font family weight", () => {
    const { result } = renderHook(() => useData());

    expect(result.current.fontWeight).toBe("medium");

    act(() => {
      result.current.changeFontWeight("bold");
    });

    expect(result.current.fontWeight).toBe("bold");
  });
});
