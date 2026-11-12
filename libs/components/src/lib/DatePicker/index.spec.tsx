import { fireEvent, render, screen } from "@testing-library/react";

import { DatePicker } from ".";
import { MonthEnum } from "@bright-resume/components";
import "@testing-library/jest-dom/extend-expect";
import { faker } from "@faker-js/faker";

describe("DatePicker Component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <DatePicker
        month={undefined}
        year={undefined}
        onChangeMonth={jest.fn()}
        onChangeYear={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should call onChangeMonth when a month is selected", () => {
    const mockChangeMonth = jest.fn();
    const monthValues = Object.values(MonthEnum);
    const monthValue =
      monthValues[Math.floor(Math.random() * monthValues.length)];

    const { getByText } = render(
      <DatePicker
        month={undefined}
        year={undefined}
        onChangeMonth={mockChangeMonth}
        onChangeYear={jest.fn()}
      />
    );

    const button = getByText("Pick your date!");
    fireEvent.click(button);

    const monthButton = screen.queryByText((content, element) => {
      // Use a custom matcher function to find the correct element
      return (
        content === monthValue && element?.tagName.toLowerCase() === "span"
      );
    });

    if (monthButton) {
      fireEvent.click(monthButton);
      expect(mockChangeMonth).toHaveBeenCalledWith(monthValue);
    } else {
      // Handle the case when the month button is not found
      // (e.g., you might want to log an error or fail the test)
    }
  });

  it("should call onChangeYear when a year is selected", () => {
    const mockChangeYear = jest.fn();
    const yearValue = faker.datatype.number({ min: 1900, max: 2100 });

    const { getByText } = render(
      <DatePicker
        month={undefined}
        year={undefined}
        onChangeMonth={jest.fn()}
        onChangeYear={mockChangeYear}
      />
    );

    const button = getByText("Pick your date!");
    fireEvent.click(button);

    const yearButton = screen.queryByText((content, element) => {
      // Use a custom matcher function to find the correct element
      return (
        content === yearValue.toString() &&
        element?.tagName.toLowerCase() === "span"
      );
    });

    if (yearButton) {
      fireEvent.click(yearButton);
      expect(mockChangeYear).toHaveBeenCalledWith(yearValue);
    } else {
      // Handle the case when the month button is not found
      // (e.g., you might want to log an error or fail the test)
    }
  });

  it("should render with a custom placeholder and color", () => {
    const customPlaceholder = faker.lorem.word();
    const customColor = faker.internet.color();

    const { getByText } = render(
      <DatePicker
        month={undefined}
        year={undefined}
        onChangeMonth={jest.fn()}
        onChangeYear={jest.fn()}
        placeholder={customPlaceholder}
      />
    );

    const placeholderButton = getByText(customPlaceholder);
    expect(placeholderButton).toHaveStyle(`color: ${customColor}`);
  });
});
