import React from "react";
import { render } from "@testing-library/react";
import Typography from "./index";

describe("Typography component", () => {
  it("renders default variant correctly", () => {
    const { getByText } = render(<Typography>Default Text</Typography>);
    const defaultText = getByText("Default Text");
    expect(defaultText).toBeDefined();
    expect(defaultText.tagName).toBe("p");
  });

  it("renders custom variant correctly", () => {
    const { getByText } = render(
      <Typography variant="h3">Custom Heading</Typography>
    );
    const customHeading = getByText("Custom Heading");
    expect(customHeading).toBeDefined();
    expect(customHeading.tagName).toBe("H3");
  });
});
