import { ComponentMeta, ComponentStory } from "@storybook/react";
import Experience from ".";

export default {
  component: Experience,
  title: "Experience",
} as ComponentMeta<typeof Experience>;

const Template: ComponentStory<typeof Experience> = (args) => {
  return (
    <div id="theme-purple">
      <Experience {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
