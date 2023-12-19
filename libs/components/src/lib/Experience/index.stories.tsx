import { Meta, StoryFn } from "@storybook/react";

import { Experience } from "./";
import { texts } from "./texts";

export default {
  component: Experience,
  title: "Experience",
} as Meta<typeof Experience>;

const Template: StoryFn<typeof Experience> = (args) => {
  return (
    <div id="theme-blue">
      <Experience
        {...args}
        header={{ label: texts.experience, placeholder: texts.experience }}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
