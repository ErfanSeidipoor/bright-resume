"use client";
import {
  Experience,
  AboutMe,
  Education,
  Certification,
  CourseWork,
  Project,
  Involvement,
} from "@bright-resume/components";
import classes from "./index.module.scss";
import { useData } from "./index.hook";

export const ResumeContent = () => {
  const data = useData();
  return (
    <div className={classes.container}>
      <AboutMe
        header={{
          value: "About Me",
        }}
        description={{
          placeholder:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        }}
      />
      <Experience
        control={data.control}
        experienceValues={data.experienceValues || []}
        fields={data.experienceFields}
        onDecrease={data.handleDecreaseExperience}
        onIncrease={data.handleIncreaseExperience}
        setValue={data.setValue}
      />
      <Education
        header={{
          value: "Education",
        }}
        items={[]}
        onDecrease={() => undefined}
        onIncrease={() => undefined}
      />
      <Certification
        certificationValues={data.certificationValues || []}
        fields={data.certificationFields}
        control={data.control}
        setValue={data.setValue}
        onDecrease={data.handleDecreaseExperience}
        onIncrease={data.handleIncreaseCertifications}
      />
      <CourseWork
        header={{
          value: "Course Work",
        }}
        items={[]}
        onDecrease={() => undefined}
        onIncrease={() => undefined}
      />
      <Project
        header={{
          value: "Project",
        }}
        items={[]}
        onDecrease={() => undefined}
        onIncrease={() => undefined}
      />
      <Involvement
        header={{
          value: "Involvement",
        }}
        items={[]}
        onDecrease={() => undefined}
        onIncrease={() => undefined}
      />
    </div>
  );
};
