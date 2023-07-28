import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import InputField from ".";

export default {
  component: InputField,
  title: "InputField",
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <InputField
      {...args}
      value={value}
      defaultValue="Position"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const headingOne = Template.bind({});
headingOne.args = {
  variant: "h1",
};

export const headingTwo = Template.bind({});
headingTwo.args = {
  variant: "h2",
};

export const medium = Template.bind({});
medium.args = {};
