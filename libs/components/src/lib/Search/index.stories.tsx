import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Search from ".";

export default {
  component: Search,
  title: "Search",
} as Meta<typeof Search>;

const Themplate: StoryFn<typeof Search> = (args) => {
  const [value, setValue] = useState<string>("");
  return (
    <div id="theme-blue">
      <Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onEmptyValue={() => setValue("")}
        {...args}
      />
    </div>
  );
};

export const Main = Themplate.bind({});
Main.args = {};
