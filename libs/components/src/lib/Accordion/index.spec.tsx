import { faker } from "@faker-js/faker";
import "@testing-library/jest-dom/extend-expect";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from ".";
import classes from "./index.module.scss";

afterEach(cleanup);

const items = Array.from({ length: 6 }).map(() => ({
  title: "Accordion Item",
  children: <div>{faker.lorem.paragraphs(2)}</div>,
}));

describe("Accordion Component", () => {
  it("should render successfully", () => {
    render(<Accordion items={items} />);

    const baseElement = screen.getByRole("tablist");
    expect(baseElement).toBeInTheDocument();
  });

  it("should render the correct number of items", () => {
    render(<Accordion items={items} />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(items.length);
  });

  it("should toggle the active state of an item when clicked", () => {
    render(<Accordion items={items} />);
    const heading = screen.getAllByRole("heading");

    heading.forEach((head) => {
      expect(head).toHaveClass(classes.accordion__item__header);
    });

    heading.forEach((head) => {
      fireEvent.click(head);
      expect(head).toHaveClass(classes.accordion__item__header__open);
    });
  });

  it("should have same title as items object title", () => {
    render(<Accordion items={items} />);
    const contents = screen.getAllByRole("contentinfo");

    contents.forEach((content, index) => {
      expect(content).toHaveTextContent(items[index].title);
    });
  });

  it("should have same content as object children", () => {
    render(<Accordion items={items} />);
    const children = screen.getAllByRole("list");
    const heading = screen.getAllByRole("heading");

    children.forEach((child, index) => {
      const element = items[index].children;
      fireEvent.click(heading[index]);
      expect(child.firstChild?.textContent).toEqual(element?.props.children);
    });
  });

  it("should adjust height automatically", async () => {
    userEvent.setup();
    // Render your component
    render(<Accordion items={items} />);
    // Get the element to click on
    const heading = await screen.findAllByRole("heading");
    const children = await screen.findAllByRole("list");

    // wait for the element to be in the DOM
    await waitFor(() => {
      heading.forEach((h) => expect(h).toBeInTheDocument());
      children.forEach((c) => expect(c).toBeInTheDocument());
    });

    children.forEach(async (child, index) => {
      expect(child).toBeInTheDocument();
      expect(heading[index]).toBeInTheDocument();

      // Check the element has the class you expect
      expect(child).toHaveClass(classes.accordion__item__children);
      // Click the element
      await userEvent.click(heading[index]);
      // Check the element has the class you expect
      expect(child).toHaveClass(classes.accordion__item__children__open);
      screen.debug()
    });
  });
});
