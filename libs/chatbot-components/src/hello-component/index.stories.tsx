import { Meta, StoryFn } from "@storybook/react";
import { HelloComponent } from ".";

export default {
  component: HelloComponent,
  title: "HelloComponent",
} as Meta<typeof HelloComponent>;

const Template: StoryFn<typeof HelloComponent> = (args) => {
  return <HelloComponent {...args} />;
};

export const Main = Template.bind({});
Main.args = { label: "Present" };
