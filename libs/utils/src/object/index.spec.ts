import { assignDefinedProps, assignProps } from ".";

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
