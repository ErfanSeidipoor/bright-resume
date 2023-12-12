import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Slider } from "./index";

describe("Slider Component", () => {
  it("should render successfully", () => {
    const mockedOnChange = jest.fn();
    render(
      <Slider
        onChange={mockedOnChange}
        label="test"
        marks={[{ label: "test", value: 1 }]}
      />
    );
    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute("type", "range");
  });

  it("updates input value when user moves the slider", async () => {
    user.setup();
    const mockedOnChange = jest.fn();
    render(<Slider onChange={mockedOnChange} label="test" />);

    const input = screen.getByRole("slider");
    await user.type(input, "50");
    expect(input).toBeDefined();
    expect(input).toHaveValue("50");
  });

  it("should call onChange when user moves the slider", async () => {
    user.setup();
    const mockedOnChange = jest.fn();
    render(<Slider onChange={mockedOnChange} value={0} />);

    const input = await screen.findByRole("slider");
    expect(input).toBeDefined();
    expect((input as HTMLInputElement).value).toBe("0");
    await fireEvent.change(input, { target: { value: "50" } });
    expect(mockedOnChange).toHaveBeenCalledTimes(1);
  });

  it("should have lable", () => {
    const mockedOnChange = jest.fn();
    render(<Slider onChange={mockedOnChange} label="test" />);
    const label = screen.getByLabelText("test");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("test");
  });

  it("should have marks", () => {
    const mockedOnChange = jest.fn();
    render(
      <Slider
        onChange={mockedOnChange}
        label="test"
        marks={[{ label: "test", value: 0 }]}
      />
    );
    const mark = screen.getByText("test");
    expect(mark).toBeInTheDocument();
  });
  it("should have min and max values", () => {
    const mockedOnChange = jest.fn();
    render(<Slider onChange={mockedOnChange} label="test" min={0} max={100} />);
    const input = screen.getByRole("slider");
    expect(input).toHaveAttribute("min", "0");
    expect(input).toHaveAttribute("max", "100");
  });

  it("should have step", () => {
    const mockedOnChange = jest.fn();
    render(<Slider onChange={mockedOnChange} label="test" step={10} />);
    const input = screen.getByRole("slider");
    expect(input).toHaveAttribute("step", "10");
  });

  it("should have value", () => {
    const mockedOnChange = jest.fn();
    render(<Slider onChange={mockedOnChange} label="test" value={10} />);
    const input = screen.getByRole("slider");
    expect(input).toHaveValue("10");
  });
  it("should have defaultValue", () => {
    const mockedOnChange = jest.fn();
    render(<Slider onChange={mockedOnChange} label="test" defaultValue={10} />);
    const input = screen.getByRole("slider");
    expect(input).toHaveValue("10");
  });
});
