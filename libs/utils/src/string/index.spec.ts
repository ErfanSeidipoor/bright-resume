import { convertToNumber, isNumeric, convertToInteger } from ".";

describe("isNumeric", () => {
  it("should return true if input is a number", () => {
    expect(isNumeric("123")).toBe(true);
  });

  it("should return false if input is not a number", () => {
    expect(isNumeric("abc")).toBe(false);
  });
});

describe("convertToNumber", () => {
  it("should convert string to number", () => {
    expect(convertToNumber("123")).toBe(123);
  });

  it("should return undefined if input is not a number", () => {
    expect(convertToNumber("abc")).toBeUndefined();
  });
});

describe("convertToInteger", () => {
  it("should convert string to integer", () => {
    expect(convertToInteger("123")).toBe(123);
  });

  it("should return undefined if input is not a number", () => {
    expect(convertToInteger("abc")).toBeUndefined();
  });
});
