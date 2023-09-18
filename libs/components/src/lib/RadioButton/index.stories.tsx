import { Meta, StoryFn } from "@storybook/react";
import RadioButton from ".";

import "../../../../theme/_index.scss";

export default {
  component: RadioButton,
  title: "RadioButton",
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => {
  return (
    <div className="theme-grey">
      <RadioButton {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = { label: "Present" };
