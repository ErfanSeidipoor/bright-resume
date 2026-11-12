import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { TextArea } from ".";
import { texts } from "./texts";
import { Button } from "@components";

export default {
  component: TextArea,
  title: "TextArea",
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [arrayValue, setArrayValue] = useState<string[]>([]);

  return (
    <div id="theme-blue">
      <TextArea
        {...args}
        label={texts.name}
        value={value}
        placeholder={texts.lorem_ipsum}
        onChange={(event) => setValue(event.target.value)}
        setValue={setValue}
        getSeparatedValues={setArrayValue}
      />
      <Button onClick={() => console.log({ arrayValue })}>Log Values</Button>
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};

export const Separate = Template.bind({});
Separate.args = {
  isSeparateValue: true,
};

export const Variant = Template.bind({});
Variant.args = {
  variant: "h1",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
