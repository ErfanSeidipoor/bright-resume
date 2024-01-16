import { Meta, StoryFn } from "@storybook/react";
import { FloatingIconButton } from ".";

import "../../../../theme/_index.scss";
import { PlusIcon } from "../Icons";

export default {
  component: FloatingIconButton,
  title: "FloatingIconButton",
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "contained"],
    },
    color: {
      control: "select",
      options: ["blue", "green", "purple", "gold", "grey"],
    },
  },
} as Meta<typeof FloatingIconButton>;

const Template: StoryFn<typeof FloatingIconButton> = (args) => {
  const onClick = () => {
    console.log("Click!");
  };

  return (
    <div className="theme-blue">
      <FloatingIconButton {...args} onClick={onClick} icon={<PlusIcon />} />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  variant: "contained",
  color: "blue",
};

export const Variant = Template.bind({});
Variant.args = {
  variant: "contained",
};

export const Color = Template.bind({});
Color.args = {
  color: "green",
};
