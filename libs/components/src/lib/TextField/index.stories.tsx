import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { TextField } from ".";
import { texts } from "./texts";

export default {
  component: TextField,
  title: "TextField",
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <div id="theme-blue">
      <TextField
        {...args}
        label={texts.name}
        value={value}
        placeholder={texts.position}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};

export const Variant = Template.bind({});
Variant.args = {
  variant: "h1",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
