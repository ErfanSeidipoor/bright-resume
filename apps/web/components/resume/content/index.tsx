"use client";
import {
  Experience,
  AboutMe,
  Education,
  Certification,
  CourseWork,
  Project,
  Involvement,
  SectionsEnum,
} from "@bright-resume/components";
import classes from "./index.module.scss";
import { useData } from "./index.hook";
import { FC } from "react";

type ResumeContentProps = {
  sections: SectionsEnum[];
};

export const ResumeContent: FC<ResumeContentProps> = ({ sections = [] }) => {
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
        isHidden={!sections.includes(SectionsEnum.about_me)}
      />
      <Experience
        control={data.control}
        setValue={data.setValue}
        experienceValues={data.experienceValues || []}
        isHidden={!sections.includes(SectionsEnum.experience)}
      />
      <Education
        control={data.control}
        setValue={data.setValue}
        educationValues={data.educationValues || []}
        isHidden={!sections.includes(SectionsEnum.education)}
      />
      <Certification
        control={data.control}
        setValue={data.setValue}
        certificationValues={data.certificationValues || []}
        isHidden={!sections.includes(SectionsEnum.certification)}
      />
      <CourseWork
        control={data.control}
        setValue={data.setValue}
        courseWorkValues={data.courseWorkValues || []}
        isHidden={!sections.includes(SectionsEnum.course_work)}
      />
      <Project
        control={data.control}
        setValue={data.setValue}
        projectValues={data.projectValues || []}
        isHidden={!sections.includes(SectionsEnum.project)}
      />
      <Involvement
        control={data.control}
        setValue={data.setValue}
        involvementValues={data.involvementValues || []}
        isHidden={!sections.includes(SectionsEnum.involvement)}
      />
    </div>
  );
};
