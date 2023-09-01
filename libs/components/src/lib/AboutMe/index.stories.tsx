import { Meta, StoryFn } from "@storybook/react";

import AboutMe from "./";

export default {
  component: AboutMe,
  title: "AboutMe",
} as Meta<typeof AboutMe>;

const Template: StoryFn<typeof AboutMe> = (args) => {
  return (
    <div id="theme-blue">
      <AboutMe {...args} />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
