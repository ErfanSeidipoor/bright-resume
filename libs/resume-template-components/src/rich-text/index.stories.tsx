import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RichText } from ".";

export default {
  component: RichText,
  title: "RichText",
} as Meta<typeof RichText>;

const Template: StoryFn<typeof RichText> = (args) => {
  const [value, setValue] = useState(
    "this is a test  <strong>bright-resume</strong>"
  );
  return (
    <div style={{ display: "flex" }}>
      <RichText value={value} onChange={(value) => setValue(value)} {...args} />
    </div>
  );
};

export const WithToolbar = Template.bind({});
WithToolbar.args = { withToolbar: true };

export const WithoutToolbar = Template.bind({});
WithoutToolbar.args = { withToolbar: false };
