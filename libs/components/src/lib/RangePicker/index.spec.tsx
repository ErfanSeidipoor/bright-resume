import { render } from "@testing-library/react";

import { RangePicker } from ".";
import "@testing-library/jest-dom/extend-expect";

describe("RangePicker Component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <RangePicker
        fromMonth={undefined}
        fromYear={undefined}
        onChangeFromMonth={jest.fn()}
        onChangeFromYear={jest.fn()}
        toMonth={undefined}
        toYear={undefined}
        onChangeToMonth={jest.fn()}
        onChangeToYear={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
