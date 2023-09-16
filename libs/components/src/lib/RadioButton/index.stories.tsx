import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioButton from ".";

import "../../../../theme/_index.scss";

export default {
  component: RadioButton,
  title: "RadioButton",
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => {
  return (
    <div className="theme-grey">
      <RadioButton {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = { children: "Present" };
