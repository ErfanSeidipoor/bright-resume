import { Meta, StoryFn } from "@storybook/react";
import Menu from ".";

export default {
  component: Menu,
  title: "Menu",
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => {
  return <Menu {...args} />;
};

export const Default = Template.bind({});
