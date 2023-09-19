import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { faker } from "@faker-js/faker";

import { TextArea } from ".";

const mockedOnChange = jest.fn();

const renderComponent = () => {
  const { baseElement } = render(
    <TextArea id="input-test" onChange={mockedOnChange} />
  );

  return { baseElement };
};

describe("TextArea Component", () => {
  it("should render successfully", () => {
    const { baseElement } = renderComponent();
    const textArea = screen.getByRole("textbox");
    expect(textArea).toBeDefined();
    expect(baseElement).toBeTruthy();
  });

  it("shows input value after user type something", async () => {
    const TEXT = faker.word.noun();
    renderComponent();
    const input = screen.getByRole("textbox");
    await user.click(input);
    await user.keyboard(TEXT);
    expect(input).toBeDefined();
    expect((input as HTMLInputElement).value).toBe(TEXT);
    expect(mockedOnChange).toHaveBeenCalled();
    expect(mockedOnChange).toHaveBeenCalledTimes(TEXT.length);
  });
});
