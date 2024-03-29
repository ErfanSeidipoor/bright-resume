import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import "@testing-library/jest-dom";

import Typography, { TypographyProps } from "./index";

const IDENTITY = faker.word.noun();

const renderComponent = <T extends React.ElementType>({
  children = IDENTITY,
  ...props
}: TypographyProps<T>) => {
  const component = render(<Typography {...props}>{IDENTITY}</Typography>);
  return component;
};

describe("Typography component", () => {
  it("should render", () => {
    render(<Typography>{IDENTITY}</Typography>);
    const element = screen.getByText(IDENTITY);
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("P");
  });

  it("should render custom variant", () => {
    renderComponent({
      variant: "h3",
    });
    const element = screen.getByText(IDENTITY);
    expect(element.tagName).toBe("H3");
    expect(element).toHaveClass("root h3");
  });

  it("should render custom component", () => {
    renderComponent({
      component: "a",
    });
    const element = screen.getByText(IDENTITY);
    expect(element.tagName).toBe("A");
  });

  it("should render custom component and custom variant", () => {
    renderComponent({
      component: "a",
      variant: "h5",
    });
    const element = screen.getByText(IDENTITY);
    expect(element.tagName).toBe("A");
    expect(element).toHaveClass("root h5");
  });

  it("should render custom class name", () => {
    renderComponent({
      className: "myClass",
    });
    const element = screen.getByText(IDENTITY);
    expect(element).toHaveClass("myClass");
  });

  it("should give props base on custom component", () => {
    renderComponent({
      component: "button",
      disabled: true,
    });
    const element = screen.getByText(IDENTITY);
    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveAttribute("disabled");
  });
});
