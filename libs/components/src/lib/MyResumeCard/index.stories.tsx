import { Meta, StoryFn } from "@storybook/react";
import { MyResumeCard } from "./";
import resumeCardImage from "@assets/image/logo-dark.png";

export default {
  component: MyResumeCard,
  title: "MyResumeCard",
} as Meta<typeof MyResumeCard>;

const Template: StoryFn<typeof MyResumeCard> = (args) => {
  const handleEdit = (id: string) => {
    console.log(id);
  };
  const handleDelete = (id: string) => {
    console.log(id);
  };
  return (
    <div id="theme-blue">
      <MyResumeCard {...args} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  id: "1",
  title: "File name",
  image: resumeCardImage,
};
