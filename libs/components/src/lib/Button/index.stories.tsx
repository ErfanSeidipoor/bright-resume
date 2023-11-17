import { Meta, StoryFn } from "@storybook/react";
import Button from ".";

import "../../../../theme/_index.scss";
import { ArrowBack, ChevronLeft, ChevronRight } from "../Icons";
import { ButtonVariant } from "../../index.type";

const ICONS = {
  ArrowBack: <ArrowBack />,
  ChevronRight: <ChevronRight />,
  ChevronLeft: <ChevronLeft />,
};

export default {
  component: Button,
  title: "Button",
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
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  const iconRight = ICONS[args.iconRight as keyof React.ReactNode];
  const iconLeft = ICONS[args.iconLeft as keyof React.ReactNode];

  const onClick = () => {
    console.log("Click!");
  };

  return (
    <div className="theme-blue">
      <Button
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
