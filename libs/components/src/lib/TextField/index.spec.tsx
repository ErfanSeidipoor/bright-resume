import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { TextField } from ".";

const mockedOnChange = jest.fn();

const renderComponent = () => {
  const { baseElement } = render(
    <TextField id="input-test" onChange={mockedOnChange} />
  );

  return { baseElement };
};

describe("TextField Component", () => {
  it("should render successfully", () => {
    const { baseElement } = renderComponent();
    const title = screen.getByRole("heading", { level: 3 });
    expect(title).toBeDefined();
    expect(baseElement).toBeTruthy();
  });

  it("shows input after user clicked", async () => {
    renderComponent();
    const icon = screen.getByRole("img");
    user.click(icon);
    const input = await screen.findByRole("textbox");
    expect(input).toBeDefined();
  });

  it("shows input value after user type something", async () => {
    renderComponent();
    const icon = screen.getByRole("img");
    user.click(icon);
    const input = await screen.findByRole("textbox");
    await user.click(input);
    await user.keyboard("some text for testing");
    expect(input).toBeDefined();
    expect((input as HTMLInputElement).value).toBe("some text for testing");
  });
});
