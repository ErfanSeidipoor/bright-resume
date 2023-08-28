import "@testing-library/jest-dom/extend-expect";

import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import AboutMe from "./";

const mockedOnChangeHeader = jest.fn();
const mockedOnChangeDescription = jest.fn();

const renderComponent = () => {
  const { baseElement } = render(
    <AboutMe
      header={{
        placeholder: "About Me",
        onChange: mockedOnChangeHeader,
      }}
      description={{
        label: "About me description",
        onChange: mockedOnChangeDescription,
      }}
    />
  );

  return { baseElement };
};

describe("AboutMe Component", () => {
  it("should render successfully", () => {
    const { baseElement } = renderComponent();
    const title = screen.getByRole("heading", { level: 2 });
    const descriprion = screen.getByRole("textbox");
    expect(title).toBeDefined();
    expect(descriprion).toBeDefined();
    expect(baseElement).toBeTruthy();
  });

  it("shows input after user clicked on header", async () => {
    renderComponent();
    const title = screen.getByRole("heading", { level: 2 });
    user.click(title);
    const input = await screen.findByPlaceholderText("About Me");
    expect(input).toBeDefined();
  });

  it("shows input value after user type something in header", async () => {
    const TEXT = faker.word.noun();
    renderComponent();
    const title = screen.getByRole("heading", { level: 2 });
    await user.click(title);

    const input = await screen.findByPlaceholderText("About Me");

    await user.keyboard(TEXT);

    expect(input).toBeDefined();
    expect(mockedOnChangeHeader).toHaveBeenCalled();
    expect(mockedOnChangeHeader).toHaveBeenCalledTimes(TEXT.length);
    expect((input as HTMLInputElement).value).toBe(TEXT);
  });

  it("shows textarea value after user type something in description", async () => {
    const TEXT = faker.word.noun();
    renderComponent();
    const description = screen.getByRole("textbox");
    await user.click(description);

    await user.keyboard(TEXT);

    expect(description).toBeDefined();
    expect(mockedOnChangeDescription).toHaveBeenCalled();
    expect(mockedOnChangeDescription).toHaveBeenCalledTimes(TEXT.length);
    expect((description as HTMLTextAreaElement).value).toBe(TEXT);
  });
});
