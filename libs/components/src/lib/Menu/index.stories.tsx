import { Meta, StoryFn } from "@storybook/react";
import Menu from ".";
import { useTheme } from "../Theme";

export default {
  component: Menu,
  title: "Menu",
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => {
  const {
    themeColor,
    fonSize,
    fontFamily,
    sections,
    changeThemeColor,
    changeFontSize,
    changeFontFamily,
    changeSections,
  } = useTheme();

  return (
    <Menu
      {...args}
      color={themeColor}
      fonSize={fonSize}
      fontFamily={fontFamily}
      sections={sections}
      onChangeColor={changeThemeColor}
      onChangeFontSize={changeFontSize}
      onChangeFontFamily={changeFontFamily}
      onChangeSections={changeSections}
    />
  );
};

export const Default = Template.bind({});
