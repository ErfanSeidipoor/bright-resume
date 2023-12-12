import { Meta, StoryFn } from "@storybook/react";
import { Slider } from "./index";

export default {
  component: Slider,
  title: "Slider",
} as Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = (args) => {
  return (
    <div id="theme-blue">
      <Slider {...args} />
    </div>
  );
};

export const Normal = Template.bind({});
Normal.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Label = Template.bind({});
Label.args = {
  label: "label",
};

export const Value = Template.bind({});
Value.args = {
  value: 50,
};

export const Min = Template.bind({});
Min.args = {
  min: 10,
};

export const Max = Template.bind({});
Max.args = {
  max: 100,
};

export const Step = Template.bind({});
Step.args = {
  step: 10,
};

export const Marks = Template.bind({});
Marks.args = {
  marks: [
    {
      value: 0,
      label: "0",
    },
    {
      value: 50,
      label: "50",
    },
    {
      value: 100,
      label: "100",
    },
  ],
};
