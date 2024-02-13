import { Meta, StoryFn } from "@storybook/react";
import { BlogCard } from "./";

export default {
  component: BlogCard,
  title: "BlogCard",
} as Meta<typeof BlogCard>;

const Template: StoryFn<typeof BlogCard> = (args) => {
  return (
    <div id="theme-blue">
      <BlogCard {...args} />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  imageWidth: "100%",
  imageHeight: "300px",
  link: "",
  categories: [{ name: "Categories" }, { name: "Categories" }],
};

export const CutOutImage = Template.bind({});
CutOutImage.args = {
  imageWidth: "100%",
  imageHeight: "300px",
  link: "",
  categories: [{ name: "Categories" }, { name: "Categories" }],
  isCutOutImage: true,
};
