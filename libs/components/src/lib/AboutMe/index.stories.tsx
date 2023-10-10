import { Meta, StoryFn } from "@storybook/react";

import AboutMe from "./";
import { texts } from "./texts";

export default {
  component: AboutMe,
  title: "AboutMe",
} as Meta<typeof AboutMe>;

const Template: StoryFn<typeof AboutMe> = (args) => {
  return (
    <div id="theme-blue">
      <AboutMe
        {...args}
        header={{ label: texts.header, placeholder: texts.about_me }}
        description={{
          label: texts.description,
          placeholder: texts.lorem_ipsum,
        }}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
