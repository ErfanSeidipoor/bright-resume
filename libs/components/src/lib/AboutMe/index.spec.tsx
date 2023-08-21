import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import AboutMe from "./";

const onChangeHeaderValue = jest.fn();
const onChangeBodyValue = jest.fn();

describe("AboutMe Component", () => {
  const renderComponent = (headerValue: string, bodyValue: string) => {
    render(
      <AboutMe
        headerValue={headerValue}
        onChangeHeaderValue={onChangeHeaderValue}
        bodyValue={bodyValue}
        onChangeBodyValue={onChangeBodyValue}
      />
    );
  };

  test("renders header and body with provided values, then shows input element when user click on each header element, then shows header element when user blured from each input element", async () => {
    const headerValue = "About Me";
    const bodyValue =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    renderComponent(headerValue, bodyValue);

    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement.textContent).toBe(headerValue);

    const bodyElement = screen.getByRole("heading", { level: 6 });
    expect(bodyElement.textContent).toBe(bodyValue);

    await user.click(headerElement);
    const headerInput = await screen.findByRole("textbox");

    expect(headerInput).toBeDefined();
    await headerInput.blur();

    expect(headerElement).toBeDefined();

    await user.click(bodyElement);
    const bodyInput = await screen.findByRole("textbox");

    expect(bodyInput).toBeDefined();
    await bodyInput.blur();

    expect(bodyElement).toBeDefined();
  });
});
