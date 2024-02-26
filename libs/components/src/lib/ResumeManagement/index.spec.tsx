import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { ResumeManagement } from ".";

// Mock props
const mockResumes = [
  {
    id: "1",
    title: "Resume 1",
  },
  {
    id: "2",
    title: "Resume 2",
  },
];
const mockOnClose = jest.fn();

const renderComponent = () => {
  const { getByTestId, getByText } = render(
    <ResumeManagement onClose={mockOnClose} resumes={mockResumes} />
  );

  return { getByTestId, getByText };
};

describe("ResumeManagement Component", () => {
  it("should renders modal and resumes successfully", async () => {
    const { getByTestId, getByText } = renderComponent();

    const backdrop = getByTestId("backdrop");
    const modal = getByTestId("modal");
    expect(backdrop).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
    expect(getByText("Resume 1")).toBeInTheDocument();
    expect(getByText("Resume 2")).toBeInTheDocument();
  });

  it("should calls onClose when backdrop is clicked", async () => {
    const { getByTestId } = renderComponent();

    const backdrop = getByTestId("backdrop");
    fireEvent.click(backdrop);

    await waitFor(() => expect(mockOnClose).toHaveBeenCalled(), {
      timeout: 600,
    });
  });

  it("should calls onClose when close button is clicked", async () => {
    const { getByTestId } = renderComponent();

    const closeButton = getByTestId("close-button");
    fireEvent.click(closeButton);

    await waitFor(() => expect(mockOnClose).toHaveBeenCalled(), {
      timeout: 600,
    });
  });
});
