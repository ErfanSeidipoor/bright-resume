import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

import "../../../../theme/_index.scss";
import ThemeProvider from "../Theme";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <ThemeProvider>
      <Button {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = { children: "Blue" };
