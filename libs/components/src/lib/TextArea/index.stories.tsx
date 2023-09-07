import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { TextArea } from ".";
import { texts } from "./texts";

export default {
  component: TextArea,
  title: "TextArea",
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <div id="theme-blue">
      <TextArea
        {...args}
        label={texts.name}
        value={value}
        placeholder={texts.lorem_ipsum}
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
