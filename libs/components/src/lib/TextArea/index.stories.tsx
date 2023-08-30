import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { TextArea } from ".";

export default {
  component: TextArea,
  title: "TextArea",
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <div id="theme-blue">
      <TextArea
        {...args}
        label="name"
        value={value}
        placeholder="Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Normal = Template.bind({});
Normal.args = {};

export const Variant = Template.bind({});
Variant.args = {
  variant: "h1",
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};
