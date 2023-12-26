import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from ".";
import { texts } from "./texts";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";

const mockOnChange = jest.fn();
const mockOnEmptyValue = jest.fn();

afterEach(cleanup);

const renderComponent = () => {
  const { baseElement } = render(
    <Search onChange={mockOnChange} onEmptyValue={mockOnEmptyValue} />
  );
  return { baseElement };
};

describe("Search Component", () => {
  it("should render successfully", () => {
    const { baseElement } = renderComponent();
    const input = screen.getByPlaceholderText(texts.placeHolder);

    expect(input).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it("should be changed value", async () => {
    renderComponent();
    const TEXT = faker.word.noun();
    userEvent.setup();
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(input, TEXT);
    expect(input.value).toBe(TEXT);
  });

  it("should be empty value after click cancel icon", async () => {
    renderComponent();
    userEvent.setup();
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const cancelIcon = screen.queryByLabelText("cancel-icon") as HTMLElement;
    await userEvent.click(cancelIcon);
    expect(cancelIcon).toBeDefined();
    expect(input.value).toBe("");
  });
});
