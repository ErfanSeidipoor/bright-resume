import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";

import Experience from ".";

const HEADER_VALUE = faker.word.noun();
const TITLE_VALUE = faker.word.noun();
const SUBTITLE_VALUE = faker.word.noun();

const renderComponent = () => {
  const { baseElement } = render(
    <Experience
      header={{ value: HEADER_VALUE }}
      items={[
        {
          id: "child-1",
          title: { value: TITLE_VALUE },
          subtitle: { value: SUBTITLE_VALUE },
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
    const title = screen.getByText(TITLE_VALUE);
    const subtitle = screen.getByText(SUBTITLE_VALUE);
    const description = screen.getByRole("textbox", {
      name: /description/i,
    });
    expect(baseElement).toBeTruthy();
    expect(header).toBeDefined();
    expect(title).toBeDefined();
    expect(subtitle).toBeDefined();
    expect(description).toBeDefined();
  });
});
