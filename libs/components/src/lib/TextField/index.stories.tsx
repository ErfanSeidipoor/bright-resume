import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { TextField } from ".";

export default {
  component: TextField,
  title: "TextField",
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <div id="theme-blue">
      <TextField
        {...args}
        label="name"
        value={value}
        defaultValue="Position"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
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
