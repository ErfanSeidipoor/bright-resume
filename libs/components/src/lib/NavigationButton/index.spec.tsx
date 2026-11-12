import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavigationButton from ".";
import { texts } from "./text";

afterEach(cleanup);

const mockOnPrevPage = jest.fn();
const mockOnNextPage = jest.fn();

const renderComponent = () => {
  return render(
    <NavigationButton
      id="navigation-button"
      hasPrevPage={true}
      hasNextPage={false}
      onNextPage={mockOnNextPage}
      onPrevPage={mockOnPrevPage}
    />
  );
};

describe("NavigationButton Component", () => {
  it("should render successfully", () => {
    const baseElement = renderComponent();
    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    expect(baseElement).toBeTruthy();
  });

  it("should be render next and prev button", () => {
    renderComponent();
    const nextButton = screen.getByRole("button", { name: texts.next });
    const prevButton = screen.getByRole("button", { name: texts.previous });

    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });

  it("increment count navigation after click next button", async () => {
    renderComponent();

    const nextButton = screen.getByRole("button", { name: texts.next });
    fireEvent.click(nextButton);
    expect(mockOnNextPage).toHaveBeenCalledTimes(1);
  });

  it("decrement count navigation after click previous button", async () => {
    renderComponent();

    const prevButton = screen.getByRole("button", { name: texts.previous });
    fireEvent.click(prevButton);
    expect(mockOnPrevPage).toHaveBeenCalledTimes(0);
  });

  it("render disabled previous button", () => {
    renderComponent();
    const prevButton = screen.getByRole("button", { name: texts.previous });
    expect(prevButton).toBeDisabled();
  });
});
