import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Components } from "./components";

export default {
  component: Components,
  title: "Components",
} as ComponentMeta<typeof Components>;

const Template: ComponentStory<typeof Components> = (args) => {
  return <Components {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
