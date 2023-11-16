import { Meta, StoryFn } from "@storybook/react";
import BlogButton from ".";

import "../../../../theme/_index.scss";
import { ArrowBack, ArrowLeftDatePicker, ArrowRightDatePicker } from "../Icons";
import { ButtonVariant } from "../../index.type";

const ICONS = {
  ArrowBack: <ArrowBack />,
  ArrowLeftDatePicker: <ArrowLeftDatePicker />,
  ArrowRightDatePicker: <ArrowRightDatePicker />,
};

export default {
  component: BlogButton,
  title: "BlogButton",
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(ButtonVariant),
    },
    iconRight: {
      control: "select",
      options: Object.keys(ICONS),
    },
    iconLeft: {
      control: "select",
      options: Object.keys(ICONS),
    },
  },
} as Meta<typeof BlogButton>;

const Template: StoryFn<typeof BlogButton> = (args) => {
  const iconRight = ICONS[args.iconRight as keyof React.ReactNode];
  const iconLeft = ICONS[args.iconLeft as keyof React.ReactNode];

  const onClick = () => {
    console.log("Click!");
  };

  return (
    <div className="theme-blue">
      <BlogButton
        {...args}
        iconRight={iconRight}
        iconLeft={iconLeft}
        onClick={onClick}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  variant: ButtonVariant.text,
  text: "Button",
  iconRight: null,
  iconLeft: null,
  disabled: false,
};
