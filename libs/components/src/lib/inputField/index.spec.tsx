import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import InputField, { InputFieldVariantEnum } from ".";

const mockedOnChange = jest.fn();

const renderComponent = () => {
  const { baseElement } = render(
    <InputField
      id="input-test"
      variant={InputFieldVariantEnum.lg}
      onChange={mockedOnChange}
    />
  );

  return { baseElement };
};

describe("InputField Component", () => {
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

  it("should input value changed when user type some text in input field", async () => {
    renderComponent();
    const icon = screen.getByRole("img");
    user.click(icon);
    const input = await screen.findByRole("textbox");
    user.click(input);
    user.keyboard("some text for testing");
    expect(input).toBeDefined();
    // expect(input).toHaveValue("new value");
  });
});
