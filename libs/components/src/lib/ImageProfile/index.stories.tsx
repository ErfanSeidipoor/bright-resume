import {
  Meta,
  StoryFn,
} from "@storybook/react";

import { ImageProfile } from "./";

export default {
  component: ImageProfile,
  title: "ImageProfile",
} as Meta<typeof ImageProfile>;

const Template: StoryFn<typeof ImageProfile> = () => {
  return (
    <div id="theme-blue">
      <ImageProfile />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
