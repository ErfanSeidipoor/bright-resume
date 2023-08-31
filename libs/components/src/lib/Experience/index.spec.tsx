import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";

import Experience from ".";

const HEADER_VALUE = faker.word.noun();
const POSITION_VALUE = faker.word.noun();
const COMPANY_VALUE = faker.word.noun();

const renderComponent = () => {
  const { baseElement } = render(
    <Experience
      header={{ value: HEADER_VALUE }}
      items={[
        {
          id: "child-1",
          position: { value: POSITION_VALUE },
          company: { value: COMPANY_VALUE },
          description: { label: "description", id: "description" },
        },
      ]}
      onIncrease={() => null}
      onDecrease={() => null}
    />
  );

  return { baseElement };
};

describe("Experience Component", () => {
  it("should render successfully", () => {
    const { baseElement } = renderComponent();
    const header = screen.getByText(HEADER_VALUE);
    const position = screen.getByText(POSITION_VALUE);
    const company = screen.getByText(COMPANY_VALUE);
    const description = screen.getByRole("textbox", {
      name: /description/i,
    });
    expect(baseElement).toBeTruthy();
    expect(header).toBeDefined();
    expect(position).toBeDefined();
    expect(company).toBeDefined();
    expect(description).toBeDefined();
  });
});
