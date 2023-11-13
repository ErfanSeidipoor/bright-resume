import { fireEvent, render, screen } from "@testing-library/react";

import { ImageProfile } from "./";

const renderComponent = () => {
  const { baseElement, container } = render(<ImageProfile />);

  return { baseElement, container };
};

describe("ImageProfile Component", () => {
  global.URL.createObjectURL = jest.fn();
  it("should render successfully", () => {
    const { baseElement } = renderComponent();
    const text = screen.getByRole("heading", { level: 6 });
    const inputUploader = screen.getByTestId("image-file-input");
    expect(text).toBeDefined();
    expect(inputUploader).toBeDefined();
    expect(baseElement).toBeTruthy();
  });

  it("should fire input click when imageProfile container clicked", () => {
    const clickMock = jest.fn();
    renderComponent();
    const container = screen.getByTestId("image-uploader-container");
    const input = screen.getByTestId("image-file-input");

    input.click = clickMock;

    // Simulate a click on the container
    fireEvent.click(container);

    // Verify that the click method of inputRef has been called
    expect(clickMock).toHaveBeenCalled();
  });

  it("should uploaded image when user select profile image", () => {
    renderComponent();
    const input = screen.getByTestId("image-file-input");

    const file = new File(["profile-image"], "profile-image.png", {
      type: "image/png",
    });
    fireEvent.change(input, { target: { files: [file] } });

    const imageTitle = screen.getByRole("img") as HTMLImageElement;
    expect(imageTitle.alt).toContain("profile-img");
  });
});
