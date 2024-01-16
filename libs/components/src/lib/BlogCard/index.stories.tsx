import { Meta, StoryFn } from "@storybook/react";
import { BlogCard } from "./";
import blogImage from "@assets/image/logo-dark.png";

export default {
  component: BlogCard,
  title: "BlogCard",
} as Meta<typeof BlogCard>;

const Template: StoryFn<typeof BlogCard> = (args) => {
  return (
    <div id="theme-blue">
      <BlogCard
        {...args}
        title={"Where can I watch?"}
        description={"Mauris id nibh eu fermentum mattis purus?"}
        shortDescription={
          "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla."
        }
        image={blogImage}
      />
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
