import { ResumeFontSizeEnum } from "@enums";
import {
  assignDefinedProps,
  assignProps,
  getNestedValue,
  removeKeyFromObject,
  toCamelCase,
} from ".";

describe("assignDefinedProps", () => {
  it("should assign only defined properties to the object", () => {
    const obj = {};
    const props = {
      a: 1,
      b: undefined,
      c: 2,
    };

    const result = assignDefinedProps(obj, props);

    expect(result).toEqual({
      a: 1,
      c: 2,
    });
  });
});

describe("assignProps", () => {
  it("should assign all properties to the object, even if they are undefined", () => {
    const obj = {};
    const props = {
      a: 1,
      b: undefined,
      c: 2,
    };

    const result = assignProps(obj, props);

    expect(result).toEqual({
      a: 1,
      b: undefined,
      c: 2,
    });
  });
});

describe("transformEnumValues", () => {
  it("should assign all properties to the object, even if they are undefined", () => {
    const transformedValues = Object.values(ResumeFontSizeEnum).map((value) =>
      toCamelCase(value)
    );
    console.log(transformedValues);
  });
});

describe("removeKeyFromObject", () => {
  it("removes key from a simple object", () => {
    const obj = { a: 1, b: 2, c: null };
    const expected = { a: 1, b: 2 };
    const result = removeKeyFromObject(obj, "c");
    console.log({ result });

    expect(result).toEqual(expected);
  });

  it("removes key from a nested object", () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: "removeMe",
        },
      },
    };
    const expected = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };
    const result = removeKeyFromObject(obj, "f");
    expect(result).toEqual(expected);
  });
});

describe("getNestedValue", () => {
  it("retrieves value from a simple object", () => {
    const obj = { a: 1, b: "value" };
    expect(getNestedValue(obj, "b")).toBe("value");
  });

  it("retrieves value from a nested object", () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: "value",
        },
      },
    };
    expect(getNestedValue(obj, "f")).toBe("value");
  });

  it("returns undefined for non-existent key", () => {
    const obj = { a: 1, b: 2 };
    expect(getNestedValue(obj, "c")).toBeUndefined();
  });
});
