import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { faker } from "@faker-js/faker";

import { TextField } from ".";

const mockedOnChange = jest.fn();

const renderComponent = () => {
  const { baseElement } = render(
    <TextField
      id="input-test"
      onChange={mockedOnChange}
      variant="h3"
      label="name"
    />
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
    const title = screen.getByRole("heading", { level: 3 });
    user.click(title);
    const input = await screen.findByRole("textbox", {
      name: /name/i,
    });
    expect(input).toBeDefined();
  });

  it("shows input value after user type something", async () => {
    const TEXT = faker.word.noun();
    renderComponent();
    const title = screen.getByRole("heading", { level: 3 });
    user.click(title);
    const input = await screen.findByRole("textbox", {
      name: /name/i,
    });
    await user.click(input);
    await user.keyboard(TEXT);
    expect(input).toBeDefined();
    expect(mockedOnChange).toHaveBeenCalled();
    expect(mockedOnChange).toHaveBeenCalledTimes(TEXT.length);
    expect((input as HTMLInputElement).value).toBe(TEXT);
  });
});
