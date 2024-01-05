import { Meta, StoryFn } from "@storybook/react";
import { CheckBox } from ".";

import "../../../../theme/_index.scss";
import { useState } from "react";

export default {
  component: CheckBox,
  title: "CheckBox",
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div id="theme-blue">
      <CheckBox
        {...args}
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = { label: "Present" };

export const Disabled = Template.bind({});
Disabled.args = { label: "Disabled", disabled: true };
