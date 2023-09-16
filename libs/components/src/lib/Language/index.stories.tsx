import { Meta, StoryFn } from "@storybook/react";

import { Language } from "./";

export default {
  component: Language,
  title: "Language",
} as Meta<typeof Language>;

const Template: StoryFn<typeof Language> = (args) => {
  return (
    <div id="theme-blue">
      <Language {...args} />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
