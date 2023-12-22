import { Meta, StoryFn } from "@storybook/react";
import NavigationButton from ".";

import "../../../../theme/_index.scss";
import Typography from "../Typography";
import { useData } from "./index.hook";

export default {
  component: NavigationButton,
  title: "NavigationButton",
} as Meta<typeof NavigationButton>;

const Template: StoryFn<typeof NavigationButton> = (args) => {
  const { page, hasPrevPage, onPrevPage, onNextPage } = useData();

  return (
    <div className="theme-blue">
      <Typography variant="h3">{page}</Typography>
      <NavigationButton
        {...args}
        hasPrevPage={hasPrevPage}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  hasNextPage: false,
  className: "navigation-button",
};
