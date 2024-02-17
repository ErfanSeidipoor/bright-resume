import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ResumeManagement } from ".";
import { texts } from "./texts";
import Button from "../Button";
import resumeCardImage from "@assets/image/logo-dark.png";

export default {
  component: ResumeManagement,
  title: "ResumeManagement",
} as Meta<typeof ResumeManagement>;

const Template: StoryFn<typeof ResumeManagement> = (args) => {
  const [isOpen, setOpen] = useState(false);

  const toggleResumeManagement = () => {
    setOpen((prevState) => !prevState);
  };
  const closeResumeManagement = () => {
    setOpen(false);
  };

  const resumes = [
    {
      id: "1",
      title: "Resume 1",
      image: resumeCardImage,
      imageWidth: "340px",
      imageHeight: "450px",
    },
    {
      id: "2",
      title: "Resume 2",
      image: resumeCardImage,
      imageWidth: "340px",
      imageHeight: "450px",
    },
    {
      id: "3",
      title: "Resume 3",
      image: resumeCardImage,
      imageWidth: "340px",
      imageHeight: "450px",
    },
    {
      id: "4",
      title: "Resume 4",
      image: resumeCardImage,
      imageWidth: "340px",
      imageHeight: "450px",
    },
  ];
  return (
    <div id="theme-blue">
      <Button onClick={toggleResumeManagement}>{texts.labelButton}</Button>

      {isOpen && (
        <ResumeManagement
          onClose={closeResumeManagement}
          resumes={resumes}
          {...args}
        />
      )}
    </div>
  );
};

export const Main = Template.bind({});
Main.args = { isStoryBook: true };
