import { Meta, StoryFn } from "@storybook/react";
import BlogButton from ".";

import "../../../../theme/_index.scss";
import { ArrowBack, ArrowLeftDatePicker } from "../Icons";
import { ButtonVariant } from "../../index.type";

const ICONS = {
  ArrowBack: <ArrowBack />,
  ArrowLeftDatePicker: <ArrowLeftDatePicker />,
};

export default {
  component: BlogButton,
  title: "BlogButton",
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(ButtonVariant),
    },
    icon: {
      control: "select",
      options: Object.keys(ICONS),
    },
  },
} as Meta<typeof BlogButton>;

const Template: StoryFn<typeof BlogButton> = (args) => {
  const icon = ICONS[args.icon as keyof React.ReactNode];

  const onClick = () => {
    console.log("Click!");
  };

  return (
    <div className="theme-blue">
      <BlogButton {...args} icon={icon} onClick={onClick} />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  variant: ButtonVariant.normal,
  text: "Button",
  icon: null,
  positionIcon: undefined,
  disabled: false,
};
