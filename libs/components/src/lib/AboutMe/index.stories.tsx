import { ComponentMeta, ComponentStory } from "@storybook/react";

import AboutMe from "./";

export default {
  component: AboutMe,
  title: "AboutMe",
} as ComponentMeta<typeof AboutMe>;

const Template: ComponentStory<typeof AboutMe> = (args) => {
  return (
    <div id="theme-blue">
      <AboutMe {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
