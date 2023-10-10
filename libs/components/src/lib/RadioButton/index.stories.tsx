import { Meta, StoryFn } from "@storybook/react";
import RadioButton from ".";

import "../../../../theme/_index.scss";
import { useState } from "react";

export default {
  component: RadioButton,
  title: "RadioButton",
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div id="theme-blue">
      <RadioButton
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
